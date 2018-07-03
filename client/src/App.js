import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";
import { Landing, Header, Test } from './component';
import "./App.css";

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
            <Header />
            <Route
              exact
              path="/"
              render={(props) => 
                <Landing src={this.props.user.photo}/>
              }
            />
            <Test />
            <Route exact path="/survey" component={Dashboard} />
            <Route path="/survey/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
});
export default connect(
  mapStateToProps,
  actions
)(App);
