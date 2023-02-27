import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import LogoTitleE from "../../assets/images/logo-e.png";
import LogoTitleR from "../../assets/images/logo-r.png";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Logo from "./Logo";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArrayE = ["d", "m", "a", "r"];
  const nameArrayR = ["a", "d", "a", "n", "o", "v", "i", "s"];
  const jobArray = [
    "*",
    " ",
    "D",
    "e",
    "s",
    "e",
    "n",
    "v",
    "o",
    "l",
    "v",
    "e",
    "d",
    "o",
    "r",
    " ",
    "W",
    "e",
    "b",
    " ",
    "*",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 5600);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>B</span>
            <span className={`${letterClass}  _2`}>e</span>
            <span className={`${letterClass}  _3`}>m</span>
            <span className={`${letterClass}  _4`}>-</span>
            <span className={`${letterClass}  _5`}>v</span>
            <span className={`${letterClass}  _6`}>i</span>
            <span className={`${letterClass}  _7`}>n</span>
            <span className={`${letterClass}  _8`}>d</span>
            <span className={`${letterClass}  _9`}>o</span>
            <span className={`${letterClass} _10`}>s</span>
            <span className={`${letterClass} _11`}>,</span>
            <br />
            <span className={`${letterClass} _12`}>m</span>
            <span className={`${letterClass} _13`}>e</span>
            <span className={`${letterClass} _14`}> </span>
            <span className={`${letterClass} _15`}>c</span>
            <span className={`${letterClass} _16`}>h</span>
            <span className={`${letterClass} _17`}>a</span>
            <span className={`${letterClass} _18`}>m</span>
            <span className={`${letterClass} _19`}>o</span>
            <span className={`${letterClass} _20`}> </span>
            <span className={`${letterClass} _21`}>.</span>
            <span className={`${letterClass} _22`}>.</span>
            <span className={`${letterClass} _23`}>.</span>
            <br />
            <img src={LogoTitleE} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArrayE}
              idx={24}
            />
            <> </>
            <img src={LogoTitleR} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArrayR}
              idx={28}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={36}
            />
          </h1>
          <h2>Full Stack developer / Advanced JavaScript </h2>
          <Link to="/contact" className="flat-button">
            CONTATE-ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
