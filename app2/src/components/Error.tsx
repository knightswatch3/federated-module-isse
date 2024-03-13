import { Component, ErrorInfo, ReactNode } from 'react';
import React from 'react';
interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: { hasError: boolean; };
    props: any;
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // You can log the error or send it to an error reporting service
        console.error('Error:', error);
        console.error('Error Info:', errorInfo);
    }

    render(): ReactNode {
        if (this.state.hasError) {
            // You can customize the error UI here
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;