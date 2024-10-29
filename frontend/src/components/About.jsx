import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Where Flavors Meet Friendship Welcome to FEAST, where 
            every bite is a celebration of flavor, and every visit
             feels like coming home. We’re more than just a place to 
             eat—we’re a community hub, a space where friendships are 
             forged over shared plates and laughter fills the air. 
             Our menu is a vibrant mix of the freshest ingredients, inspired
              by global traditions and local favorites. Join us, and let’s create
               memories together—one delicious moment at a time.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;