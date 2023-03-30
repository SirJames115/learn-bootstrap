import React from "react";
import ai from "./assets/ai.png";
import possibility from "./assets/possibility.png";
import blog01 from "./assets/blog01.png";
import blog02 from "./assets/blog02.png";
import blog03 from "./assets/blog03.png";
import blog04 from "./assets/blog04.png";
import shopify from "./assets/shopify.png";
import slack from "./assets/slack.png";
import atlassian from "./assets/atlassian.png";
import google from "./assets/google.png";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <div className="row justify-content-center">
          <div className="card bg-dark col-md-3 my-1 mx-2">
            <img
              src={ai}
              alt="ai"
              height="100%"
              width="100%"
              className="card-img-top"
            />
            <p className="h2 text-white">First Card</p>
            <p className="card-text text-white">
              In this first card, we are displaying the image of a robot called
              AI because that is what we're going to build next
            </p>
            <button className="btn my-2 shadow-lg btn-primary col-md-12 justify-content-center">
              Get Started
            </button>
          </div>
          <div className="card bg-secondary  col-md-3 my-1 mx-2">
            <img
              src={possibility}
              alt="ai"
              height="100%"
              width="100%"
              className="card-img-top"
            />
            <p className="h2 text-white">Second Card</p>
            <p className="card-text text-white">
              In this first card, we are displaying the image of a robot called
              AI because that is what we're going to build next
            </p>
            <button className="btn my-2 btn-primary col-md-12 justify-content-center">
              Get Started
            </button>
          </div>
          <div className="card bg-primary  col-md-3 my-1 mx-2">
            <img
              src={blog01}
              height="100%"
              width="100%"
              alt="blog01"
              className="card-img-top"
            />
            <p className="h2 text-white">Third Card</p>
            <p className="card-text text-white">
              In this first card, we are displaying the image of a robot called
              AI because that is what we're going to build next
            </p>
            <button className="btn my-2 btn-secondary col-md-12 justify-content-center">
              Get Started
            </button>
          </div>
          <div className="card bg-secondary col-md-3 my-1 mx-2">
            <img
              src={blog02}
              alt="blog02"
              height="100%"
              width="100%"
              className="card-img-top"
            />
            <p className="h2 text-white">Fourth Card</p>
            <p className="card-text text-white">
              In this first card, we are displaying the image of a robot called
              AI because that is what we're going to build next
            </p>
            <button className="btn btn-primary my-2 col-md-12 justify-content-center">
              Get Started
            </button>
          </div>

          <div className="card bg-primary col-md-3 my-1 mx-2">
            <img
              src={blog04}
              alt="blog04"
              height="100%"
              width="100%"
              className="card-img-top"
            />
            <p className="h2 text-white">Fifth Card</p>
            <p className="card-text text-white">
              In this first card, we are displaying the image of a robot called
              AI because that is what we're going to build next
            </p>
            <button className="btn btn-secondary my-2 col-md-12 justify-content-center">
              Get Started
            </button>
          </div>
          <div className="card bg-dark col-md-3 my-1 mx-2">
            <img
              src={blog03}
              alt="blog03"
              height="100%"
              width="100%"
              className="card-img-top"
            />
            <p className="h2 text-white">Sixth Card</p>
            <p className="card-text text-white">
              In this first card, we are displaying the image of a robot called
              AI because that is what we're going to build next
            </p>
            <button className="btn btn-primary my-2 col-md-12 justify-content-center">
              Get Started
            </button>
          </div>
        </div>
        <div className="row text-center my-5 justify-content-center">
          <p className="h3">
            You can contact us through our social media handdles
          </p>
          <div className="row-center">
            <a href="#">
              <img src={google} className="col-sm-1 m-2" alt="google" />
            </a>
            <a href="#">
              <img src={shopify} className="col-sm-1 m-2" alt="shopify" />
            </a>
            <a href="#">
              <img src={slack} className="col-sm-1 m-2" alt="slack" />
            </a>
            <a href="#">
              <img src={atlassian} className="col-sm-1 m-2" alt="atlassian" />
            </a>
          </div>
        </div>
        <footer className="row bg-dark text-white text-center align-items-center justify-content-center p-4">
          <p>Your website copyright 2022</p>
        </footer>
      </div>
    </>
  );
};

export default App;
