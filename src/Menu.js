import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div className="MenuContainer">
                <nav>
                    <ul className="menu">
                        <li>
                            <NavLink id="ChoiceMenu" to="/">Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink id="ChoiceMenu" to="/about">About</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

        );
    }
}

export default Menu;