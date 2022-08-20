import React from 'react';

// Microsoft Severity Levels Enum
// https://docs.microsoft.com/en-us/dotnet/api/microsoft.applicationinsights.datacontracts.severitylevel?view=azure-dotnet
export const SeverityLevel = {
    Verbose: 0,
    Information: 1,
    Warning: 2,
    Error: 3,
    Critical: 4
};

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error: error };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // eslint-disable-next-line no-console
        console.log(`Failed Component Error: ${error}`);
        // eslint-disable-next-line no-console
        console.log(`Failed Component ErrorInfo: ${JSON.stringify(errorInfo)}`);
    }

    render() {
        if (this.state.hasrror) {
            // You can render any custom fallback UI
            if (this.props.fallback) return this.props.fallback;
            return <div className="bodyText bodyLight">Something went wrong.</div>;
        }

        return this.props.children;
    }
}
export default ErrorBoundary;
