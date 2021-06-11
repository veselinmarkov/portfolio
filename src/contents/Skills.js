import React, { Component } from 'react';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'data_skills': ['Java', 'Python', 'C++', 'Databases (MySQL, Oracle)', 'Bash scripting'],
            'web_skills': ['Djando', 'React', 'NodeJS', 'IBM Cloudant db', 'IBM microservices']
        };
    }

    render() {
        return(
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <h3>Data Skills</h3>
                <ul>
                    {this.state.data_skills.map((value)=> {
                        return <li>{value}</li>
                    })}
                </ul>
                <h3>Full stack Skills</h3>
                <ul>
                    {this.state.web_skills.map((value)=> {
                        return <li>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Skills
