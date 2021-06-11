import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Telecommunication" where="Technical University, Sofia"
                from="1991-September" to="1996-August" />
                <Widecard title="Physics" where="National mathematics school, Sofia"
                from="1983-September" to="1987-July" />
            </div>
        )
    }
}

export default Education
