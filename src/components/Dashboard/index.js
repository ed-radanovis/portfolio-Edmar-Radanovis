import "./index.scss";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Home from "./home";
import Login from "../Login";
import Loader from "react-loaders";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="dashboard-home">{user ? <Home /> : <Login />}</div>
      <Loader type="pacman" />
    </>
  );
};

export default Dashboard;
