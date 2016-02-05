import React, { Component, PropTypes, Children } from 'react';
import {asList as validate} from 'skymma';

export default validate;

export function FieldErrors({errors, field, children, show = true}) {

    if (!show || errors.isEmpty()) {
        return <span></span>;
    }

    const messages = [];
    Children.forEach(children, child => {

        const valid = errors
            .filter(err => err.field == field)
            .filter(err => err.name == child.props.name)
            .map(err => err.valid)[0];

        if (child.type == Message && !valid) {
            messages.push(child.props.children);
        }
    });

    return <div>{messages}</div>;
}
FieldErrors.propTypes = {
    field: PropTypes.string.isRequired,
    errors: PropTypes.object,
    children: PropTypes.node.isRequired,
    show: PropTypes.bool
};

export class Message extends Component {
    render() {
        return null;
    }
}
Message.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node
};
