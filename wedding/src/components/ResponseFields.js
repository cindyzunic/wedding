import React, { Component } from "react";
import Header from "../components/Header";
import GuestStore from "../stores/GuestStore";

export default class ResponseFields extends Component {
    constructor() {
        super();
        this.handleAccept = this.handleAccept.bind(this);
        this.handleDecline = this.handleDecline.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMsgChange = this.handleMsgChange.bind(this);
        this.handleDeclineSubmit = this.handleDeclineSubmit.bind(this);
        
        this.state = {
            accept: true,
            declineMsg: ""
        };
        this.acceptedActive = " btn-primary";
        this.declinedActive = "";
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = GuestStore.getGroup(this.state);
        this.props.saveValues(data);
        this.props.nextStep();
    }

    handleAccept(e) {

        this.setState({
            accept: true
        });

        this.acceptedActive = " btn-primary";
        this.declinedActive = "";
    }

    handleDecline(e) {

        this.setState({
            accept: false
        });

        this.acceptedActive = "";
        this.declinedActive = " btn-primary";

    }

    handleDeclineSubmit(e) {
        const groupId = this.props.values.id;
        GuestStore.declineAll(groupId);
    }

    handleMsgChange(e) {
        const value = e.target.value;
        this.setState({ declineMsg: value });
    }

    render() {
        return (
            <div className="rsvp-container">
                <Header />
                <div className="container-fluid">
                    <div className="rsvp-header">
                        <h1>Confirm</h1>
                    </div>
                    <p>Hi, {this.props.values.responder}, {this.props.values.maxGuests} seats have been reserved in your honour.</p>
                    <div className="btn-group u-block" data-toggle="buttons">
                        <label className={"btn u-half-width" + this.acceptedActive}>
                            <input type="radio" checked={this.state.accept} name="accept" id="accept" value="Accept" onChange={this.handleAccept} />
                            Accept
                        </label>
                        <label className={"btn u-half-width" + this.declinedActive}>
                            <input type="radio" name="decline" id="decline" checked={!this.state.accept} value="Decline" onChange={this.handleDecline} />
                            Decline
                        </label>
                    </div>
                    <form onSubmit={this.handleDeclineSubmit} className={this.state.accept ? "u-hidden" : ""}>
                        <textarea 
                        className="decline-textarea" 
                        value={this.state.declineMsg} 
                        placeholder="We are unable to attend..."
                        onChange={this.handleMsgChange}></textarea>
                        <button type="submit" className="btn btn-primary btn-mobileblock">Submit</button>
                    </form>
                    <form onSubmit={this.handleAcceptSubmit} className={!this.state.accept ? "u-hidden" : ""}>
                        <button type="submit" className="btn btn-primary btn-mobileblock">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}