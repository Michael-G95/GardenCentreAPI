import React from 'react';
import ErrorDisplay from './ErrorDisplay';


function withErrorDisplay(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <>
                    <ErrorDisplay/>
                    <WrappedComponent {...this.props}/>
                </>
                );
        }
    }
}



export default withErrorDisplay