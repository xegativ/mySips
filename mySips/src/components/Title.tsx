// import { NavLink, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Title() {
    return (
        <div className="title-box">
            <h1>
                <NavLink
                    style={{ textDecoration: "none", color: "white" }}
                    to={"/"}
                >
                    mySips
                </NavLink>
            </h1>
        </div>
    );
}

export default Title;
