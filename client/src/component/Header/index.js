import React, { Component } from "react";
import "../styles.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <nav>
            <div className="nav-wrapper">
                <a className="left brand-logo">Demo</a>
                <ul className="right">
                    <li>
                        <a>Login With Google</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
  }
}
