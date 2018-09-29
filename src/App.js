import React, { Component } from 'react';
import Home from './components/home';
import Detail from './components/detail';
import AddInfoDoctor from './components/addInfoDoctor';
import { API_URL } from './config'
import { Route, BrowserRouter as Router } from 'react-router-dom'

window.root = API_URL


class App extends Component {
    constructor(props) {
        super(props)
    }

   

    render() {
        return (
            <React.Fragment>
                <Route exact path='/' component={Home} />
                <Route exact path='/patient' component={Detail} />
                <Route path='/patient/:add' component={(props) => (<Detail {...this.state} {...props} />)} />
            </React.Fragment>

        );
    }
}

export default App; 
