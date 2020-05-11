import React from 'react';
import {NavLink} from 'react-router-dom';

const Tetris = () => {
    window.scrollTo(0, 0)
    return (
        <div className="Project">
            <div className="title_project">
                <h1>Tetris</h1>
                <div className="Project_text">
                    <img
                        id="Tetris_Project"
                        className="Project_Illustration"
                        alt=""
                        src="./Illustration/tetris.jpg"></img>
                </div>
            </div>
            <div className="Project_presentation">
                <p>
                    <br/>The goal of this project is to recreate the Tetris game in a UNIX terminal,<br/><br/>
                    with the Gameboy version rules. we have to use ncurses.<br/><br/>
                    To play, there must be a tetriminos directory, which contains files that
                    describe the game pieces.<br/><br/>
                    <img src="./Illustration/pieces.png" alt=""></img>
                </p>
                <p>The goal was not only to make a full Tetris game but also to handle options.<br/><br/>
                    Such as a keys selection, gameplay options & also a debug mode</p>
                <img src="./Illustration/options.png" alt=""></img>
                <p>My game has almost all the features like a scoring system or a difficulty system.<br/><br/>It looks like this:</p>
                <img src="./Illustration/Tetris_play.gif" alt=""></img>
                <p className="WhiteSpace">.</p>
                <img className="NextProject" alt="" src="./Illustration/rpg.png"></img>
                <NavLink to="/Rpg" className="NextProject_text">My_rpg</NavLink>
                <p className="WhiteSpace">.<br/>.<br/>.<br/>.<br/>.<br/></p>
            </div>
            <div className="scroll-downs">
                <div className="mousey">
                    <div className="scroller"></div>
                </div>
            </div>
        </div>
    );
}

export default Tetris;