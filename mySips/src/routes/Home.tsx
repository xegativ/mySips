// import { NavLink, Routes, Route } from "react-router-dom";
import React from "react";
import { NavLink } from "react-router-dom";

import HomeNav from "../components/HomeNav";

function Home() {
  return (
    <>
      <div className="homeNav-wrap">
        <HomeNav></HomeNav>
      </div>
      <section className="section-hero">
        <div className="section-header-center">
          <p className="hero-helper-text-welcome">Welcome to mySips</p>

          <div className="section-header-title">
            <span>Where Every Sip Tells a Story,</span>
            <span>
              Your Personal{" "}
              <b className="gradient-orange-red">Drink Journal.</b>
            </span>
          </div>
          <div>
            <div className="section-subheader">
              <p className="hero-helper-text-summary">
                mySips is your way to store all your favorite drinks in one
                place! Making going out effortless.
              </p>
              <div className="button-wrap">
                <NavLink className="hero-button" to={"app"}>
                  Sign up
                </NavLink>
                <NavLink className="hero-button" to={"app"}>
                  Try now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
