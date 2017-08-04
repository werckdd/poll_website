import React from 'react'
var io = require('socket.io-client');
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';

import { Header }  from './parts/Header.js';
import  Counter  from './parts/Counter.js';
import Audience from './Audience.js';
import Speaker from './Speaker.js';
import Board from './Board.js';
import NoMatch from './Whoops404.js'

const PropTypes = require('prop-types')

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
    //using context to pass params to chiidren due to the diasbility in react router v4
    getChildContext() {
        return {status:this.state.status, title:this.state.title}
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
                    <Switch>
                        <Route path="/" render={() => (
                            <div>
                                <Route path="/Audience" render={props => (<Audience {...props} />)} />
                                <Route path="/Board" component={Board} />
                                <Route path="/Speaker" component={Speaker} />
                            </div>
                        )} />
                        <Route component={NoMatch} />
                    </Switch>
                   
                </div>
            </Router>
        )    
    }
}
//using context to pass params to chiidren due to the diasbility in react router v4
APP.childContextTypes = {
    status: PropTypes.string,
    title: PropTypes.string
}
