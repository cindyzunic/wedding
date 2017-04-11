import React, { Component } from 'react';
import Header from "../components/Header";

export default class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <h1>Cindy and John</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra nulla sed tincidunt mattis. Quisque imperdiet et lorem eu tempor. Sed nec dapibus sapien, bibendum auctor libero. Nullam elementum ex leo, at posuere quam consectetur sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac ultrices nibh. In rutrum maximus erat.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <img className="img-block" src="/assets/3.jpg" />
                        </div>
                        <div className="col-md">
                            <img className="img-block" src="/assets/2.jpg" />
                            <img className="img-block" src="/assets/4.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}