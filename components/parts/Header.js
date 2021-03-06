var React = require('react');
import { PropTypes } from 'prop-types';


export class Header extends React.Component{

    static defaultProps = {
        status: 'disconnected'
    }
    static protoTypes = {
        title: PropTypes.string
    }
    render() {
        return (
            <header className="row">
                <div className="col-xs-10">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="col-xs-2">
                    <span id="connection-status" className={this.props.status}>test</span>
                </div>
            </header>
        )
    }
};
