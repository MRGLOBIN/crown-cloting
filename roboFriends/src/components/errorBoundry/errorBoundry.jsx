import React, { Component } from 'react'

class ErrorBoundry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error, message) {
    this.setState({ hasError })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooooops! An Error occured</h1>
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundry
