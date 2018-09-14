import React, { Component } from "react";
import { Button, Icon } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import "./style.css";

const styles = themes => ({
  btnEmail: {
    backgroundColor: "#209e91",
    textTransform: "none",
    fontSize: 16,
    "&:hover": {
      backgroundColor: "#0d7482 !important"
    }
  },
  btnGoogle: {
    backgroundColor: "#DA4735",
    textTransform: "none",
    fontSize: 16,
    "&:hover": {
      backgroundColor: "#ad3324 !important"
    }
  }
});

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
    props.onRef(this);
  }

  componentDidMount() {
    setTimeout(this.open, 2700);
  }

  myLink = props => <Link to="/auth/google" {...props} />;

  open = () => {
    this.setState({
      isShow: true
    });
  };

  close = () => {
    this.setState({
      isShow: false
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="container-login">
        <p id="title">
          <span className="title">PETIT</span>
        </p>
        {this.state.isShow ? (
          <div className="loginForm">
            <header>SIGN IN</header>
            <div className="form">
              <Button color="inherit" fullWidth className={classes.btnEmail}>
                <Icon style={{ marginRight: 5 }}>account_circle</Icon>
                Email & Password
              </Button>
              <div className="social-title">
                <span>or sign in with social</span>
              </div>
              <a
                href="/auth/google"
                style={{ color: "inherit", width: "100%" }}
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
