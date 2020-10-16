import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Button, Card, Alert } from "react-bootstrap";
import { useAuth } from '../context/AuthContext';


export default function Dashboard() {
    const { currentUser, logOut } = useAuth();
    const [error, setError] = useState("");
    const history = useHistory();

   async function handleLogout(e) {
        setError("");
        e.preventDefault();
        try {
            await logOut();
            history.pushState("/");
        }
        catch {
            setError("Failed to Log Out")
        }

    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error && <Alert variant="danger" >{error}</Alert>}
                    <strong>Email:</strong>{currentUser.email}
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout} >Log Out</Button>
            </div>
        </>
    )
}
