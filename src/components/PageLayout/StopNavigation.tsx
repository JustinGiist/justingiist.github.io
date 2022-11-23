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

class StopNavigation extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentWillUnmount(): void {
        if (this.props.hasChanges) {
            (async () => {
                const alertResult = await alert('unsaved changes');
                debugger;
                this.props.history.block();
                // Make a real alert prompt.
            })();
        }
    }

    render() {
        return this.props.children;
    }
}
export default StopNavigation;
