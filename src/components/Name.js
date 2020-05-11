import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Name extends Component {
    render() {
        return (
            <NavLink to="/" className="Name">
                <p>Martin Rougeron</p>
            </NavLink>
        );
    }
}

export default Name;