import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import { Header } from './component';
import { Login, Store } from './container';
import './App.css';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    console.log(this.props.user);
    return (
      <div className="container" id="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" render={(props) => <Login />} />
            <Route exact path="/survey" component={Dashboard} />
            <Route path="/survey/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(
  mapStateToProps,
  actions,
)(App);
