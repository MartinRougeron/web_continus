import React from 'react';

import {Route, Switch} from 'react-router-dom';
import Home from './ChooseProject/Home';
import About from './About';
import Error from './Error';
import Tetris from './Projects/Tetris';
import Rpg from './Projects/Rpg';
import sh from './Projects/42sh';

const Content = () => {
    return (
        <Route
            render={({location}) => (
            <Switch location={location}>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About}/>
                <Route path="/Tetris" component={Tetris}/>
                <Route path="/Rpg" component={Rpg}/>
                <Route path="/42sh" component={sh}/>
                <Route component={Error}/>
            </Switch>
        )}/>
    );
}

export default Content;