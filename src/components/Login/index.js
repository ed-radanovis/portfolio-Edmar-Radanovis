import "./index.scss";
import { signInWithGoogle } from "../../firebase";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useLayoutEffect, useState } from "react";

const Login = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useLayoutEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="dashboard-login">
        <button className="signin-button" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </div>
      <div className="h1-dashboard-login">
      <h1 className="h1-dashboard">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={"<> Updates </>".split("")}
          idx={15}
        />
      </h1>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Login;
