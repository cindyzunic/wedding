import React, { Component } from "react";
import Header from "../components/Header";
import GuestStore from "../stores/GuestStore";

export default class IdentityFields extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            postalCode: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = GuestStore.getGroup(this.state);
        data.responder = this.state.firstName;

        this.props.saveValues(data);
        this.props.nextStep();
    }

    render() {
        return (
            <div className="rsvp-container">
                <Header />
                <div className="container-fluid">
                    <div className="rsvp-header">
                        <h1>Let us know you're coming</h1>
                    </div>
                    <p>Please enter your name as it appears on your invitation.</p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstname" >First Name:</label>
                            <input
                                name="firstName"
                                type="text"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                className="form-control"
                                id="firstname"
                                placeholder="Enter first name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">Last Name:</label>
                            <input
                                name="lastName"
                                type="text"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                className="form-control"
                                id="lastname"
                                placeholder="Enter last name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="postalcode">Postal Code:</label>
                            <input
                                name="postalCode"
                                type="text"
                                value={this.state.postalCode}
                                onChange={this.handleChange}
                                className="form-control"
                                id="postalcode"
                                placeholder="Enter postal code"
                                maxLength="6" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-mobileblock">Continue</button>
                    </form>
                </div>
            </div>
        );
    }
}