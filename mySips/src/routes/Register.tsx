import { useState } from "react";
import { NavLink } from "react-router-dom";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();

        try {
            const response = await fetch(
                "http://localhost:3000/signup-page/submit",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username, password }),
                }
            );

            if (response.ok) {
                console.log("Successfully Registered");
                setStatus("Account Registered.");
            } else {
                const errorResponse = await response.text();
                console.error("Login Failed: ", errorResponse);
                setStatus(`Register Failed: ${username} , ${password}`);
            }
        } catch (error) {
            console.log("Error during login:", error);
        }
    };

    return (
        <div id="login-wrap">
            <div id="form-wrap">
                <NavLink to={"/"}>Back</NavLink>
                <h1>Register</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <br></br>
                    <label>Username</label>
                    <input
                        id="username"
                        name="username"
                        placeholder="Username"
                        type="text"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    ></input>
                    <br></br>
                    <label>Password</label>
                    <input
                        id="password"
                        name="password"
                        placeholder="Password"
                        type="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <br></br>
                    <button id="form-submit">Sign up</button>
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

export default Register;
