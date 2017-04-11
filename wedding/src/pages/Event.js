import React, { Component } from 'react';
import Header from "../components/Header";

export default class Event extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <h1>Time & Place</h1>
                    <h2>Saturday, August 12th, 2017</h2>
                    <div className="event-schedule">
                        6:00 PM - 6:30 PM Ceremony<br />
                        6:30 PM - 7:30 PM Cocktails<br />
                        7:30 PM - 1:00 AM Reception
                    </div>

                    <h2>Cambridge Mill</h2>
                    <div className="event-schedule">
                        130 Water Street North, <br />
                        Cambridge, ON N1R 1P1 <br />
                        <a href="http://cambridgemill.ca/" target="_blank" title="Cambridge Mill">cambridgemill.ca</a>
                    </div>

                    <div className="event-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.6486776817783!2d-80.31835318411024!3d43.363458879132345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c75f500ffeb39%3A0x6e5786ca7189d120!2sCambridge+Mill!5e0!3m2!1sen!2sca!4v1491878737719&key=AIzaSyBDxSffPMVkJ8ecX9ROHN2_wI8yHzOdRYo">
                        </iframe>
                    </div>
                </div>
            </div >
        );
    }
}