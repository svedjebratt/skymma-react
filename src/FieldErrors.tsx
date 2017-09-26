import * as React from 'react';
import Message, {Props as MessageProps} from './Message';

export interface Props {
    field: string,
    errors: any[],
    children: React.ReactNode,
    show?: boolean
}

const FieldErrors: React.SFC<Props> = ({errors, field, children, show = true}) => {
    if (!show || !errors.length) {
        return null;
    }

    const messages: React.ReactElement<any>[] = [];
    React.Children.forEach(children, (child: React.ReactElement<any>) => {

        const error = errors.filter(err => err.field === field && err.name === child.props.name)[0];

        if (error && !error.valid) {
            const props: {key: string, message?: string} = {
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

export default FieldErrors
