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

                    <h2>Food & Drink</h2>
                    <p>Hors d'oeuvres will be served during the cocktail hour. Dinner will be served at 7:30 PM. 
                        You will have your choice of an appetizer, entree, and dessert, to be selected during the cocktail hour. 
                        A vegetarian option will, of course, be available.
                        A late night table will consist of fresh fruit, bread and cheese, and various sweets.
                        The reception is open bar - you're welcome. :) 
                        </p>

                    <h2>Suggested Attire</h2>
                    <p>Wear what you'd wear to dinner at a nice restaurant. If you're comfortable, you'll look great! 
                        </p>
                </div>
            </div>
        );
    }
}