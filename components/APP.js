var React = require('react');
var io = require('socket.io-client');
var ReactDOM = require('react-dom');

import { Header } from '../components/parts/Header.js';
import { Counter } from '../components/parts/Counter.js';


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
        var socket = io.connect();
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
        return (
            <Header title={this.state.title} status={this.state.status}></Header>
        )
    }
};