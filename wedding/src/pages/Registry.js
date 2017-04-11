import React, { Component } from 'react';
import Header from "../components/Header";

export default class Registry extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <h1>Registry and Gifts</h1>
                    <p>We are not registered anywhere.
                        To have you celebrate our wedding with us is enough.
                        No additional gifts are necessary!
                        </p>
                </div>
            </div>
        );
    }
}