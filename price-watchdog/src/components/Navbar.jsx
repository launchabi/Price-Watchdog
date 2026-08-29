import { Link } from "react-router-dom";
import "../styling/Navbar.css";

export default function Navbar() {
    return (
        <>
            <h1 className="title">Price Watchdog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/about">About</Link>
            </div>
        </>
    );
}
