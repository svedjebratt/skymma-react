import React, {Children} from 'react';
import PropTypes from 'prop-types';

export default function FieldErrors({errors, field, children, show = true}) {

    if (!show || !errors.length) {
        return null;
    }

    const messages = [];
    Children.forEach(children, child => {

        const error = errors.filter(err => err.field === field && err.name === child.props.name)[0];

        if (error && !error.valid) {
            const props = {
                key: child.props.name
            };

            if (error.message && !child.props.message) {
                props.message = error.message;
            }

            messages.push(React.cloneElement(child, props));
        }
    });

    return (<div>{messages}</div>);
}
FieldErrors.propTypes = {
    field: PropTypes.string.isRequired,
    errors: PropTypes.array.isRequired,
    children: PropTypes.node.isRequired,
    show: PropTypes.bool
};
