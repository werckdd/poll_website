import React from 'react'
import {Link} from 'react-router-dom'

export default class Whoops404 extends React.Component{
    render() {
        return (
            <div id="not-found">
                <h1>Whoops 404</h1>
                <p>We cannot find the page that you have requested</p>

                <ul>
                    <li><Link to="/Audience">audience</Link></li>
                    <li><Link to="/Board">board</Link></li>
                    <li><Link to="/Speaker">speaker</Link></li>
                </ul> 
            </div>
        )
    }
};