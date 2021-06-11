import React, { Component } from 'react';
import ReactTyingEffect from 'react-typing-effect';
import profilepic from '../img/photo.jpg';
import Social from '../components/Social'

class Home extends Component {
    render() {
        return (
            <div className="condiv home" >
                <img src={profilepic} className="profilepic" alt="Veselin Markov" height={320}></img>
                <h2>
                <ReactTyingEffect className="typingeffect" 
                text={['Veselin Markov', 'Data Analyst', 'Web design']} speed={100} eraseDelay={700} />
                <Social />
                </h2>
            </div>
        )
    }
}

export default Home