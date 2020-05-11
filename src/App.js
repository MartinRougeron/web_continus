import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

import Menu from "./Menu"
import Content from "./components/Content"
import Name from './components/Name';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Menu/>
                <Name/>
                <Content/>
            </BrowserRouter>
        );
    }
}

export default App;