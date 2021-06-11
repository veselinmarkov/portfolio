import React, { Component } from 'react';
import Social from '../components/Social';

class Contact extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <p>email: veselin.markov@gmail.com</p>
                <p>address: Lahmannstr. 5
                    90419 Nürnberg
                    Deutschland
                </p>
                <Social/>
            </div>
        )
    }
}

export default Contact
