import React, { Component, ErrorInfo } from 'react';

interface ErrorBoundaryProps {}
interface ErrorBoundaryState {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps,ErrorBoundaryState> {
  state:ErrorBoundaryState ={
    hasError: false
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error:any, errorInfo:any) {
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de repuesto
      return <h1>Algo salio mal.</h1>;
    }

    return this.props.children; 
  }
}
export default ErrorBoundary;