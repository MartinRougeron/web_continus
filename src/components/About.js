import React from 'react';
import DownloadLink from "react-download-link";


const About = () => {
    return (
        <div className="About">
            <h1>About Me<br/><br/></h1>
            <p>
                I'm Martin Rougeron, a first-year student at EPITECH Lyon.
            </p>
            <DownloadLink
            className="LINK"
                style={{
                textDecorationSkip: 0
            }}
                label="Download my resume"
                filename="CV Martin Rougeron.pdf"
                exportFile={() => "My cached data"}/>
            <h2>Passions<br/><br/></h2>
            <div className="Passions">

                <p>My main passion is art, and more specifically: street-art.<br/><br/>
                    One of my favorite works of art is this Nelson Mandela portrait by C215.<br/><br/>
                    <img src="./Illustration/mandela.jpg" alt=""></img>
                </p>
            </div>
            <h2>Skills<br/><br/></h2>
            <p>C : intermediate<br/><br/></p>
            <p>Git : intermediate<br/><br/></p>
            <p>Python : Novice<br/><br/></p>
            <p>Js : Novice<br/><br/></p>
            <p>React : Novice (this website)<br/><br/></p>
            <h2>Experience<br/><br/></h2>
            <p>1 week at Thermador Groupe where I learn how an informatic team works.<br/></p>
        </div>
    );
}

export default About;