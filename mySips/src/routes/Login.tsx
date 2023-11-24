import { useState } from "react";
import { NavLink } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "http://localhost:3000/login-page/submit",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username, password }),
                }
            );

            if (response.ok) {
                console.log("Successfully Logged In");
                setStatus("Logged In.");
            } else {
                const errorResponse = await response.text();
                console.error("Login Failed: ", errorResponse);
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
                        id="username"
                        name="username"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    ></input>
                    <br></br>
                    <label>Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
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
