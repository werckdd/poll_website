import React from 'react'
var io = require('socket.io-client');
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';

import { Header }  from './parts/Header.js';
import  Counter  from './parts/Counter.js';
import Audience from './Audience.js';
import Speaker from './Speaker.js';
import Board from './Board.js';



export default class APP extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            status: 'disconnected',
            title: ''
        };
        this.welcome = this.welcome.bind(this)
    }
    
    componentWillMount() {
        const socket = io.connect();
        socket.on('Welcome', this.welcome);
    }
    componentWillUnnount() {
        socket.emit('disconnect');
        this.setState({ status: 'disconnected' });
    }
    welcome(serverState) {
        this.setState({
            status: 'connected',
            title: serverState.title
        })
    }
    render() {
        const thisTitle = this.state.title
        const thisStatus = this.state.status
        return (   
            <Router>
                <div>
                    <Header title={thisTitle} status={thisStatus}></Header>
                    <Counter />
                      <ul>
                        <li><Link to="/Audience">audience</Link></li>
                        <li><Link to="/Board">board</Link></li>
                        <li><Link to="/Speaker">speaker</Link></li>
                    </ul> 
                    <hr /> 

                    <Route path="/" render={() => 
                        <div>
                            <Route path="/Audience" component={Audience} />
                            <Route path="/Board" component={Board} />
                            <Route path="/Speaker" component={Speaker} />
                        </div>
                    } /> 
                </div>
            </Router>
        
        )    
    }
}

