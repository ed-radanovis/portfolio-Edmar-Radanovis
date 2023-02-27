import "./index.scss";
import { useRef } from "react";
import { auth, db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc } from "firebase/firestore/lite";
import { collection } from "firebase/firestore/lite";

const Home = () => {
  const form = useRef();
  const submitPortfolio = (e) => {
    e.preventDefault();
    const name = form.current[0]?.value;
    const description = form.current[1]?.value;
    const url = form.current[2]?.value;
    const image = form.current[3]?.files[0];

    const storageRef = ref(storage, `portfolio/${image.name}`);

    uploadBytes(storageRef, image).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then(
          (downloadURL) => {
            savePortfolio({
              name,
              description,
              url,
              image: downloadURL,
            });
          },
          (error) => {
            console.log(error);
            savePortfolio({
              name,
              description,
              url,
              image: null,
            });
          }
        );
      },
      (error) => {
        console.log(error);
        savePortfolio({
          name,
          description,
          url,
          image: null,
        });
      }
    );
  };

  const savePortfolio = async (portfolio) => {
    try {
      await addDoc(collection(db, "portfolio"), portfolio);
      window.location.reload(false);
    } catch (error) {
      alert("Failed to add portfolio");
    }
  };

  return (
    <div className="dashboard-home">
      <form ref={form} onSubmit={submitPortfolio}>
        <p>
          <input className="dashboard-name" type="text" placeholder="Name" />
        </p>
        <p>
          <textarea
            className="dashboard-description"
            placeholder="Description"
          />
        </p>
        <p>
          <input className="dashboard-url" type="text" placeholder="Url" />
        </p>
        <p>
          <input className="dashboard-image" type="file" placeholder="Image" />
        </p>
        <button className="submit-button" type="submit">
          SUBMIT
        </button>
        <button className="signout-button" onClick={() => auth.signOut()}>
          SIGN OUT
        </button>
      </form>
    </div>
  );
};

export default Home;
