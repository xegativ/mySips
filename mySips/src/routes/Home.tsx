// import { NavLink, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import heroSVG from "../assets/section-hero-bg.png";

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

    const divStyle = {
        backgroundImage: `url(${heroSVG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        width: "100%",
        height: "120vh",
    };

    return (
        <div className="home-wrap" style={divStyle}>
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
                                        to={"register"}
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
