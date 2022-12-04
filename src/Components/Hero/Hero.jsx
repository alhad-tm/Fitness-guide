import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero-two.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import { Link } from "react-scroll";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "164px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        {/* Hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              <br />
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="3" preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              {" "}
              <NumberCounter end={1878} start={1641} delay="3" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              {" "}
              <NumberCounter end={40} start={28} delay="3" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* herobuttons */}
        <div className="hero-buttons">
          <button className="btn">Get started</button>
          <button className="btn">Learn more</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">
          {" "}
          <Link to="footer" spy={true} smooth={true}>
            Join now
          </Link>
        </button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart rate</span>
          <span>113 bpm</span>
        </motion.div>
        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />

        {/* calories */}
        <div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>221 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
