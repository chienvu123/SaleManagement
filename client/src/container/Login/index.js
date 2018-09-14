import React, { Component } from "react";
import { Loading } from '../../component';
import LoginForm from './LoginForm';
import './style.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
    // this.loginForm.open();
  }

  render() {
    return (
        <div className="container" id="login">
            <Loading 
                onRef={(node) => this.loading = node}
            />
            <LoginForm 
              onRef={(node) => this.loginForm = node}
              {...this.props}
            />
        </div>
    )
  }
}
