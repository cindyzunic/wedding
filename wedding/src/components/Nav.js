import React, { Component } from "react";
import { Link } from "react-router";

export default class Nav extends Component {
    render() {
        return (
            <ul className="nav">
                <li className="nav-item"><Link className="nav-link" to="/">Us</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/event">Event</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/registry">Registry</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/rsvp">RSVP</Link></li>
            </ul>
        );
    }
}