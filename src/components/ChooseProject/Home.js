import React from 'react';
import {NavLink} from 'react-router-dom';
import ChangeImg from './ChangeImg'
import Images from './Imgs'

class home extends React.Component {
    state = {
        which: 0,
    }
    handleEnvent = (nb) => {
        if (this.state.which !== nb) {
            this.setState({which: nb});
            ChangeImg(nb)
        }
    }
    render() {
        return (
            <div className="home">
                <div>
                    <Images/>
                </div>
                <ul className="Projects">
                    <li className="Selection">
                        <NavLink
                            to="/Tetris"
                            onMouseEnter={() => this.handleEnvent(0)}
                            className="ProjectTitle"
                            id="Tetris_id">Tetris</NavLink>
                    </li>
                    <li className="Selection">
                        <NavLink
                            to="/Rpg"
                            onMouseEnter={() => this.handleEnvent(1)}
                            className="ProjectTitle"
                            id="My_rpg_id">My_rpg</NavLink>
                    </li>
                    <li className="Selection">
                        <NavLink
                            to="/42sh"
                            onMouseEnter={() => this.handleEnvent(2)}
                            className="ProjectTitle"
                            id="42sh_id">42sh</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default home;