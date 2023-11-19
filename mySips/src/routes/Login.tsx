import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/login-page/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                console.log("Successfully Logged In");
            } else {
                console.error("Login Failed");
                setStatus("Login Failed.");
            }
        } catch (error) {
            console.log("Error during login:", error);
        }
    };

    return (
        <div id="login-wrap">
            <div id="form-wrap">
                <NavLink to={"/"}>Back</NavLink>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <br></br>
                    <label>Username</label>
                    <input
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    ></input>
                    <br></br>
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <br></br>
                    <button id="form-submit">Login</button>
                </form>
                <p
                    style={{
                        fontSize: "12px",
                        textAlign: "center",
                        marginTop: "10px",
                    }}
                >
                    {status}
                </p>
            </div>
        </div>
    );
}

export default Login;
