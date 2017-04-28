import React, { Component } from "react";
import Header from "../components/Header";
import GuestStore from "../stores/GuestStore";
import $ from "jquery";

export default class ResponseFields extends Component {
    constructor() {
        super();
        this.handleAccept = this.handleAccept.bind(this);
        this.handleDecline = this.handleDecline.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMsgChange = this.handleMsgChange.bind(this);
        this.handleDeclineSubmit = this.handleDeclineSubmit.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
        this.handleChildChecked = this.handleChildChecked.bind(this);
        this.handleAgeChecked = this.handleAgeChecked.bind(this);
        this.handleSeatChecked = this.handleSeatChecked.bind(this);
        this.handleAllergyChange = this.handleAllergyChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddBack = this.handleAddBack.bind(this);

        this.state = {
            accept: true,
            declineMsg: ""
        };
        this.acceptedActive = " btn-primary";
        this.declinedActive = "";
        this.notes = [];
        this.children = {};
        this.seating = {};
        this.allergies = {};
        this.declines = [];
        this.accepts = [];
    }

    handleSubmit(e) {
        e.preventDefault();
        

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

    handleChecked(e) {
        let checked = e.nativeEvent.target.checked;

        let gid = e.target.parentNode.parentNode.parentNode.getAttribute("data-gid");

        if (!gid) {
            gid = e.target.parentNode.parentNode.parentNode.parentNode.getAttribute("data-gid");
        }

        let nid = e.target.getAttribute("data-noteId");

        if (checked) {
            if (nid == 6) {
                $("#allergy-" + gid).removeClass("u-hidden");
                return;
            }

            let ind = this.addNote(gid, nid);
            e.target.setAttribute("data-ind", ind);
        } else {
            if (nid == 6) {
                $("#allergy-" + gid).addClass("u-hidden");
                $("#allergy-" + gid).val("");
            }

            let index = e.target.getAttribute("data-ind");
            this.removeNote(index);

            if(this.allergies.hasOwnProperty[gid]) {
                delete this.allergies[gid];
            }
        }
    }

    handleAgeChecked(e) {
        let gid = e.target.parentNode.parentNode.parentNode.getAttribute("data-gid");
        let nid = e.target.getAttribute("data-noteId");

        this.children[gid] = nid;
    }

    handleSeatChecked(e) {
        let gid = e.target.parentNode.parentNode.parentNode.getAttribute("data-gid");
        let nid = e.target.getAttribute("data-noteId");

        this.seating[gid] = nid;
    }

    handleChildChecked(e) {
        let checked = e.nativeEvent.target.checked;
        let gid = e.target.getAttribute("data-gid");
        let targetId = "form-" + gid;

        if (checked) {
            $("#" + targetId).removeClass("u-hidden");
        } else {
            $("#" + targetId).addClass("u-hidden");
            if (this.children.hasOwnProperty(gid)) {
                delete this.children[gid];
            }

            if (this.seating.hasOwnProperty(gid)) {
                delete this.seating[gid];
            }

            let index = $("#childmeal-" + gid).attr("data-ind");
            this.removeNote(index);
        }
    }

    handleDelete(e) {
        e.preventDefault();
        let gid = e.target.parentNode.parentNode.getAttribute("data-gid");
        this.declines.push(gid);

        $("#declined-" + gid).removeClass("u-hidden");
        $(e.target.parentNode.parentNode).addClass("u-hidden");
    }

    handleAddBack(e) {
        e.preventDefault();
        let gid = e.target.getAttribute("data-gid");
        this.declines.splice(
            this.declines.indexOf(gid), 1
        );
        $(e.target.parentNode.parentNode).addClass("u-hidden");
        $(".guest-item[data-gid='"+gid+"']").removeClass("u-hidden");
    };

    handleAllergyChange(e) {
        let gid = e.target.parentNode.parentNode.parentNode.getAttribute("data-gid");
        let value = e.target.value;
        this.allergies[gid] = value;
    }

    addNote(gid, nid, desc) {
        let obj = {
            gid: gid,
            nid: nid
        };

        if (desc && desc.length) {
            obj.description = desc;
        }

        let len = this.notes.push(obj);

        return len - 1;
    }

    removeNote(index) {
        if (index) {
            this.notes.splice(index, 1);
        }
    }

    render() {
        let guests = [];
        this.props.values.guests.forEach(function (element) {
            guests.push(
                <li key={element.id}>
                    <div className="guest-decline u-hidden" id={"declined-" + element.id}>
                        <div className="guest-name" tabIndex="0">{element.fname} {element.lname} is not attending
                            <button className="btn" onClick={this.handleAddBack} data-gid={element.id}>Undo</button>
                        </div>
                    </div>
                    <div className="guest-item" data-gid={element.id}>
                        <div className="guest-name" tabIndex="0">{element.fname} {element.lname}
                            <a href="javascript:void(0);" role="button" title={"Delete " + element.fname} onClick={this.handleDelete}>x</a>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" data-gid={element.id} type="checkbox" value="Guest is a child" onChange={this.handleChildChecked} />
                                Child
                            </label>
                        </div>
                        <div className="form-nested u-hidden" id={"form-" + element.id}>
                            <label className="radio">
                                <input type="radio" name="Age" data-noteId="0" value="Age 0 to 3" onChange={this.handleAgeChecked} />
                                Age 0 - 3
                            </label>
                            <label className="radio">
                                <input type="radio" name="Age" data-noteId="1" value="Age 4 to 12" onChange={this.handleAgeChecked} />
                                Age 4 - 12
                            </label> <br />
                            <label className="radio">
                                <input type="radio" name="Seat" data-noteId="2" value="Request high chair" onChange={this.handleSeatChecked} />
                                Request a high chair
                            </label>
                            <label className="radio">
                                <input type="radio" name="Seat" data-noteId="3" value="Request booster chair" onChange={this.handleSeatChecked} />
                                Request a booster chair
                            </label>

                            <div className="form-check">
                                <label className="form-check-label">
                                    <input id={"childmeal-" + element.id} className="form-check-input" type="checkbox" data-noteId="4" value="Would prefer children's meal" onChange={this.handleChecked} />
                                    Would prefer to have children's meal of chicken fingers and fries instead of a smaller portion of an adult meal.
                                </label>
                            </div>
                        </div>

                        <div className="form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" value="Requires wheelchair-accessible accommodations" data-noteId="5" onChange={this.handleChecked} />
                                Requires wheelchair-accessible accommodations
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" value="Has a food allergy" onChange={this.handleChecked} data-noteId="6" />
                                Has a food allergy
                                <input
                                    id={"allergy-" + element.id}
                                    name="firstName"
                                    type="text"
                                    onChange={this.handleAllergyChange}
                                    className="form-control u-hidden"
                                    placeholder="Enter food allergy" />
                            </label>
                        </div>
                    </div>
                </li>
            );
        }, this);

        return (
            <div className="rsvp-container">
                <Header />
                <div className="container-fluid">
                    <div className="rsvp-header">
                        <h1>Confirm</h1>
                    </div>
                    <p tabIndex="0">Hi, {this.props.values.responder}, {this.props.values.maxGuests} seats have been reserved in your honour. Please let us know who's coming.</p>
                    <div className="btn-group u-block" data-toggle="buttons">
                        <label className={"btn u-half-width" + this.acceptedActive}>
                            <input type="radio" checked={this.state.accept} name="acceptdecline" id="accept" value="Accept" onChange={this.handleAccept} />
                            Accept
                        </label>
                        <label className={"btn u-half-width" + this.declinedActive}>
                            <input type="radio" name="acceptdecline" id="decline" checked={!this.state.accept} value="Decline" onChange={this.handleDecline} />
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
                        <ul className="guest-list">
                            {guests}
                        </ul>

                        <button type="submit" className="btn btn-primary btn-mobileblock">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}
