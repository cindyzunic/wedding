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
                    <p>We are not registered anywhere. We've already started our lives together, so we have most of the household items we need.
                        To have you celebrate our big day with us is enough - no additional gifts are necessary!
                        </p>
                </div>
            </div>
        );
    }
}