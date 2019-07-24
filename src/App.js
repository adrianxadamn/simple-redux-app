import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.isOnline ? (
            <button onClick={this.props.LogOut}>Log Out!</button>
          ) : (
            <button onClick={this.props.LogIn}>Log In!</button>
          )}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOnline: state.isOnline
  }
}

const mapDispatchToProps = dispatch => {
  return {
    LogIn: () => dispatch({ type: 'LOGIN' }),
    LogOut: () => dispatch({ type: 'LOGOUT' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
