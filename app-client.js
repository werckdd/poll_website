import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import  APP  from './components/APP.js';
import  Audience  from './components/Audience.js';
import  Speaker  from './components/Speaker.js';
import  Board  from './components/Board.js';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <APP />
            <Switch>
                <Route path="/audience" component={Audience} />
                <Route path="/board" component={Board} />
                <Route path="/speaker" component={Speaker} />
            </Switch> 
        </div>    
        
    </BrowserRouter>, document.getElementById('react-container') );