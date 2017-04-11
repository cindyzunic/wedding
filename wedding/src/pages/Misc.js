import React, { Component } from 'react';
import Header from "../components/Header";

export default class Misc extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <h1>Misc Info</h1>
                    <h2>Registry</h2>
                    <p>We are not registered anywhere.
                        To have you celebrate our wedding with us is enough.
                        No additional gifts are necessary!
                        </p>

                    <h2>Suggested Attire</h2>
                    <p>There is no dress code. Conference attire.
                        </p>
                </div>
            </div>
        );
    }
}