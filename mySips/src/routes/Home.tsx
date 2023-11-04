// import { NavLink, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import HomeNav from "../components/HomeNav";

function Home() {
    // useEffect(() => {
    //     // Applying on mount
    //     document.body.style.overflow = "visible";
    //     // Applying on unmount
    //     return () => {
    //         document.body.style.overflow = "hidden";
    //     };
    // }, []);

    return (
        <div className="home-wrap">
            <div className="homeNav-wrap">
                <HomeNav></HomeNav>
            </div>
            <section className="section-hero">
                <div className="section-header-center">
                    <p className="hero-helper-text-welcome">
                        Welcome to mySips
                    </p>

                    <div className="section-header-title">
                        <span>Where Every Sip Tells a Story,</span>
                        <span>
                            Your Personal{" "}
                            <b className="gradient-orange-red">
                                Drink Journal.
                            </b>
                        </span>
                    </div>
                    <div>
                        <div className="section-subheader">
                            <p className="hero-helper-text-summary">
                                mySips is your way to store all your favorite
                                drinks in one place! Making going out{" "}
                                <b className="td-underline">effortless.</b>
                            </p>

                            <div className="button-wrap">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 2 }}
                                >
                                    <NavLink
                                        className="hero-button-line"
                                        to={"app"}
                                    >
                                        Sign up
                                    </NavLink>

                                    <NavLink className="hero-button" to={"app"}>
                                        Try out ➤
                                    </NavLink>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <img className="bg-bottom" src={bgSVG}></img> */}
        </div>
    );
}

export default Home;
