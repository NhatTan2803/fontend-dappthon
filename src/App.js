import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Detail from './components/detail';
import AddInfoDoctor from './components/addInfoDoctor';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Detail />
            </div>
        );
    }
}

export default App; 
