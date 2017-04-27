import React, { Component } from "react";
import IdentityFields from "../components/IdentityFields";
import ResponseFields from "../components/ResponseFields";

export default class RSVP extends Component {
    constructor() {
        super();
        this.state = {
            step: 1
        };
    }

    saveValues(fields) {
        this.values = fields;
    }

    nextStep() {
        this.setState({ step: this.state.step + 1 });
    }

    render() {
        switch (this.state.step) {
            case 1:
                return <IdentityFields
                    values={this.values}
                    nextStep={this.nextStep.bind(this)}
                    saveValues={this.saveValues.bind(this)}
                />;
            case 2:
                return <ResponseFields
                    values={this.values}
                    nextStep={this.nextStep.bind(this)}
                    saveValues={this.saveValues.bind(this)}
                />;
            default:
                return <IdentityFields
                    values={this.values}
                    nextStep={this.nextStep.bind(this)}
                    saveValues={this.saveValues.bind(this)}
                />;
        }
    }
}
