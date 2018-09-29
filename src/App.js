import React, { Component } from 'react';
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
