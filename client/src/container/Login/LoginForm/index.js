import React, { Component } from 'react';
import { Button, Icon, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './style.css';

const styles = (themes) => ({
  btnEmail: {
    backgroundColor: '#209e91',
    textTransform: 'none',
    fontSize: 16,
    '&:hover': {
      backgroundColor: '#0d7482 !important',
    },
  },
  btnGoogle: {
    backgroundColor: '#DA4735',
    textTransform: 'none',
    fontSize: 16,
    '&:hover': {
      backgroundColor: '#ad3324 !important',
    },
  },
});

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
    props.onRef(this);
  }

  componentDidMount() {
    setTimeout(this.open, 2700);
  }

  myLink = (props) => <Link to="/auth/google" {...props} />;

  open = () => {
    this.setState({
      isShow: true,
    });
  };

  close = () => {
    this.setState({
      isShow: false,
    });
  };

  localLogin = () => {
    if (this.userName) {
      if (this.password) {
        // Axios.get('api/profile').then((data) => console.log(data));
        // Axios.get('/auth/login').then((data) => console.log(data));
        fetch(
          'http://192.168.12.36:5000/auth/login',

          {
            method: 'post',
            mode: 'no-cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
              // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify({
              userName: this.userName,
              password: this.password,
            }),
          },
        ).then((result) => {
          if (result.ok === true) alert('login success');
        });
      } else {
        alert('Ban can phai nhap password');
      }
    } else {
      alert('Ban can phai nhap ten tai khoan');
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="container-login">
        <p id="title">
          <span className="title">SALE MANAGEMENT</span>
        </p>
        {this.state.isShow ? (
          <div className="loginForm">
            <header>SIGN IN</header>
            <div className="form" style={{ width: '90%' }}>
              <div style={{ width: '100%', color: 'white', fontSize: 40 }}>
                <TextField
                  name="userName"
                  fullWidth
                  placeholder="Username ..."
                  onKeyPress={(event) => {
                    if (event.nativeEvent.keyCode === 13) this.localLogin();
                  }}
                  color="white"
                  onChange={(event) => {
                    this.userName = event.nativeEvent.target.value;
                  }}
                  style={{ color: 'white', fontSize: 40, fontStyle: 'italic' }}
                />
                <br />
                <TextField
                  name="password"
                  type="password"
                  fullWidth
                  style={{ color: 'white', fontSize: 40, fontStyle: 'italic' }}
                  placeholder="password ..."
                  onChange={(event) => {
                    this.password = event.nativeEvent.target.value;
                  }}
                  onKeyPress={(event) => {
                    if (event.nativeEvent.keyCode === 13) this.localLogin();
                  }}
                />
              </div>
              <Button
                color="inherit"
                fullWidth
                className={classes.btnEmail}
                onClick={this.localLogin}
              >
                <Icon style={{ marginRight: 5 }}>account_circle</Icon>
                Username & Password
              </Button>
              <div className="social-title">
                <span>or sign in with social</span>
              </div>
              <a
                href="/auth/google"
                style={{ color: 'inherit', width: '100%' }}
              >
                <Button
                  color="inherit"
                  variant="contained"
                  fullWidth
                  className={classes.btnGoogle}
                  // component={this.myLink}
                >
                  <i
                    className="fab fa-google-plus-g"
                    style={{ marginRight: 5 }}
                  />
                  Google
                </Button>
              </a>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withStyles(styles)(LoginForm);
