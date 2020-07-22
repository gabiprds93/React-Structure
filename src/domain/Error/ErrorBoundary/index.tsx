import React from 'react';

import ErrorMessage from '../ErrorMessage';

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
};

const withError = <P extends object>(Component: React.ComponentType<P>) => {
  class ErrorBoundary extends React.Component<P> {
    state: ErrorBoundaryState ={
      hasError: false,
      message: '',
    }

    componentDidCatch(error: Error) {
      this.setState({
        hasError: true,
        message: error.message
      })
      // logErrorToMyService(error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        return(
          <ErrorMessage msgError={this.state.message} />
        )
      }

      return <Component {...this.props as P} />
    }
  }
  return ErrorBoundary;
}

export default withError;