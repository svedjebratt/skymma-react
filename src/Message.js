import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Message extends Component {
    render() {
        return <div>{this.props.message}</div>;
    }
}
Message.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.string
};