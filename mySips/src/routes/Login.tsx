import { NavLink } from "react-router-dom";
function Login() {
    return (
        <div id="login-wrap">
            <div id="form-wrap">
                <NavLink id="login-back" to={"/"}>
                    Back
                </NavLink>
                <h1>Login</h1>
                <form>
                    <br></br>
                    <label>Username</label>
                    <input placeholder="Username"></input>
                    <br></br>
                    <label>Password</label>
                    <input placeholder="Password"></input>
                    <br></br>
                    <button id="form-submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
