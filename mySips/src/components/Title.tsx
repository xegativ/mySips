// import { NavLink, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function Title() {
  return (
    <div className="title-box">
      <h1>
        <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
          mySips
        </Link>
      </h1>
    </div>
  );
}

export default Title;
