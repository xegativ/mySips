import { NavLink } from "react-router-dom";

const HomeNav = () => {
    return (
        <div className="nav-top">
            <NavLink className="td-none" id="homenav-logo" to={"/"}>
                mySips
            </NavLink>
            <ul>
                <li>
                    <NavLink className="td-none" to={"/"}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className="td-none" to={"/about"}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink className="td-none" to={"/register"}>
                        Register
                    </NavLink>
                </li>
                <li>
                    <NavLink className="td-none" to={"/login"}>
                        Login
                    </NavLink>
                </li>
            </ul>
            <NavLink
                className="nav-try td-underline"
                id="homenav-outline"
                to={"/app"}
            >
                Try out
            </NavLink>
        </div>
    );
};

export default HomeNav;
