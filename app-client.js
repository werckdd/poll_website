import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'

import  APP  from './components/APP.js';




const render =  Component  => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>
        , document.getElementById('react-container'))
}

render(APP)

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