import * as React from 'react';

export interface Props {
    name: string;
    message?: string;
}

export default class Message extends React.Component<Props> {
    render() {
        return <div>{this.props.message}</div>;
    }
}
