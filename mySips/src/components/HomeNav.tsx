import { NavLink } from "react-router-dom";

const HomeNav = () => {
  return (
    <div className="nav-top">
      <ul>
        <li>
          <NavLink className="td-none" to={"/"}>
            Home
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
        <li>
          <NavLink className="nav-try td-underline" to={"/app"}>
            Try out
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default HomeNav;
