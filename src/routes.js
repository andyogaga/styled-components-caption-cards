import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

// import redux
import { connect } from "react-redux";
// core components
import Login from "./views/Login/LoginContainer";
// Error Boundary
import ErrorBoundary from "./components/ErrorBoundary.jsx";

class Routes extends Component {
  render() {
    const { auth } = this.props;
    return (
      <ErrorBoundary>
        <Switch>
          <Route path="/login" component={Login} />
          <Redirect from="*" to="/" />
        </Switch>
      </ErrorBoundary>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.authenticated
  };
};

export default withRouter(connect(mapStateToProps)(Routes));
