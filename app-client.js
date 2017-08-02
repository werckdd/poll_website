import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader'

import  APP  from './components/APP.js';
import  Audience  from './components/Audience.js';
import  Speaker  from './components/Speaker.js';
import  Board  from './components/Board.js';
import Counter from './components/parts/Counter';

const router = (
    <BrowserRouter>
        <div>
            <APP />
            <Switch>
                <Route path="/audience" component={Audience} />
                <Route path="/board" component={Board} />
                <Route path="/speaker" component={Speaker} />
                <Route path="/counter" component={Counter} />
            </Switch>
        </div>
    </BrowserRouter>
)

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            {Component}
        </AppContainer>
        , document.getElementById('react-container'))
}

render(router)

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept();
}

// if (module.hot) {
//   module.hot.accept('./containers/App', () => {
//     const NextApp = require('./containers/App').default;
//     ReactDOM.render(
//       <AppContainer>
//         <NextApp/>
//       </AppContainer>,
//       document.getElementById('root')
//     );
//   });
// }