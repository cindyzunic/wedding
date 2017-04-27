import React, { Component } from 'react';
import Header from "../components/Header";

export default class About extends Component {
    getDaysSince() {
        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        var firstDate = new Date(2012, 8, 11);
        var secondDate = new Date();

        var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
        return diffDays;
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <h1>Cindy and John</h1>
                            <p>We met in Brampton in 2012. We started dating in August of that year, and we've been together for {this.getDaysSince()} days. 
                                In that time, we've both finished university, adopted two cats, bought our first new car together, 
                                and moved into and out of two crappy apartments. In September 2015, we got engaged, and we're getting 
                                married on August 12th, 2017. We couldn't be more excited to share our big day with you!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <h2>Bride</h2>
                            <p>Zindy is a 23-year old software developer. She enjoys reading books, eating delicious foods, napping, yelling at Glenn, acquiring
                                cats, and looking through Ikea catalogs.
                            </p>
                        </div>
                        <div className="col-md">
                            <h2>Groom</h2>
                            <p>Glenn is a 24-year old transportation planner. Glenn likes riding bicycles, looking at trains, calling
                                his brothers, saying Markschs!, and asking Cindy for footrubs.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <img className="img-block" src="/assets/3.jpg" title="Cindy and John Engagement" alt="Cindy and John Engagement" />
                        </div>
                        <div className="col-md">
                            <img className="img-block" src="/assets/2.jpg" title="Cindy and John Engagement" alt="Cindy and John Engagement" />
                            <img className="img-block" src="/assets/4.jpg" title="Cindy and John Engagement" alt="Cindy and John Engagement" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <h2>Our People</h2>
                            <p>Like our wedding itself, our wedding party is small, but at our head table, you'll find a few of our closest friends. 
                                They are Laurie (maid of honour) and Alex (honorary bridesman!), 
                                Tony (best man) and Amanda (bridesmaid), and Mark (groomsman) and Natalie (honorary bridesmaid!).</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <img className="img-block" src="/assets/lauriealex.png" title="Laurie & Alex" alt="Laurie & Alex" />
                        </div>
                        <div className="col-md">
                            <img className="img-block" src="https://instagram.fymy1-2.fna.fbcdn.net/t51.2885-15/e15/12145176_1505489953097158_660938057_n.jpg" title="Tony & Amanda" alt="Tony & Amanda" />
                        </div>
                        <div className="col-md">
                            <img className="img-block" src="/assets/mrk.png" title="Natalie & Mrk!" alt="Mrk! & Natalie" />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}