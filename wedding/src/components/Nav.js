import React, { Component } from "react";
import { Link } from "react-router";
import $ from "jquery";

export default class Nav extends Component {
    constructor() {
        super();
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(e) {
        $('.collapse').toggleClass('show');
        $('.navbar-toggler').attr('aria-expanded',
            !$('.navbar-toggler').attr('aria-expanded')
        );

        e.preventDefault();
    }

    render() {
        return (
            <nav className="navbar navbar-toggleable-sm navbar-light">
                <button className="navbar-toggler" type="button" onClick={this.toggleMenu} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="/">Us</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/event">Event</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/rsvp">RSVP</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/misc">Misc</Link></li>                  
                    </ul>
                </div>
            </nav>
        );
    }
}