import { NavLink } from "react-router-dom";
function Register() {
    return (
        <div id="login-wrap">
            <div id="form-wrap">
                <NavLink id="login-back" to={"/"}>
                    Back
                </NavLink>
                <h1>Register</h1>
                <form>
                    <br></br>
                    <label>Username</label>
                    <input placeholder="Username"></input>
                    <br></br>
                    <label>Password</label>
                    <input placeholder="Password"></input>
                    <br></br>
                    <button id="form-submit">Sign up</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
