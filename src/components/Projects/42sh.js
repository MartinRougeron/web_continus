import React from 'react';
import {NavLink} from 'react-router-dom';

const sh = () => {
    window.scrollTo(0, 0)
    return (
        <div className="Project">
            <div className="title_project">
                <h1>42sh</h1>
                <div className="Project_text">
                    <img
                        id="Tetris_Project"
                        className="Project_Illustration"
                        alt=""
                        src="./Illustration/42sh.png"></img>
                </div>
            </div>
            <div className="Project_presentation">
                <p>
                    <br/>42sh is a project where we have to create a complete shell with <br/><br/>
                    • spaces and tabs,<br/><br/>
                    • $PATH and environment,<br/><br/>
                    • errors and return value,<br/><br/>
                    • redirections<br/><br/>
                    • pipes (‘|’),<br/><br/>
                    • builtins: cd, echo, exit, setenv, unsetenv,<br/><br/>
                    • separators: ‘;’, ‘&&’, ‘||’.<br/><br/>
                    For instance, the shell should be able to execute the following command:<br/><br/>
                    <img style={{marginLeft: 50}} src="./Illustration/command.png" alt=""></img>
                </p>
                <img className="NextProject" alt="" src="./Illustration/tetris.jpg"></img>
                <NavLink to="/Tetris" className="NextProject_text">Tetris</NavLink>
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

export default sh;