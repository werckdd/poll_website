import React from 'react'
import Display from './parts/Display.js'

const PropTypes = require('prop-types')

export default class Audience extends React.Component{
    render() {
        return (
            <div>
                <h1>Audience:{this.props.match.path}</h1>
                <Display if={this.context.status === 'connected'}>
                    <h1>Join the session</h1>
                </Display>
            </div>
        )
    }
};

Audience.contextTypes = {
    status: PropTypes.string,
    title: PropTypes.string
}