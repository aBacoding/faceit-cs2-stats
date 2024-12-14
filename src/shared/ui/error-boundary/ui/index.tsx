import React, { Component, ErrorInfo } from "react";

interface Props {
    children: React.ReactNode;
}

interface State {
    isError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { isError: false }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('Caught an error: ', error, errorInfo)
        this.setState({ isError: true });
    }

    render(): React.ReactNode {
        if (this.state.isError) {
            return <h1>sad</h1>;
        }
        return this.props.children
    }
}

export default ErrorBoundary;