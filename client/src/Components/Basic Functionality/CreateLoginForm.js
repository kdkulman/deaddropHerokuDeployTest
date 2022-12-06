import * as React from 'react';
import { Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { login } from "../Firebase/FirebaseFunctions";

export function CreateLoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(username, password);
            history.push("/");
        }
        catch {
            setError("Failed to log in");
        }
    }

    return (
        <div>
            <h2>Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" required onChange={e => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                    Log In
                </Button>
                <Button disabled={loading} className="w-100" type="submit">
                    Create Account
                </Button>
            </Form>
            <div className="w-100 text-center mt-3">
                <Link to="/forgot-password">Forgot Password?</Link>
            </div>
        </div>
    )
}