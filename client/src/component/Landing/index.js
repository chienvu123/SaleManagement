import React, { Component } from "react";
import "../styles.css";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return this.props.src ? (
      <div className="container-image">
        <img
          src={
            this.props.src
              ? this.props.src
              : "https://lh4.googleusercontent.com/-wCZlM7_bjKE/AAAAAAAAAAI/AAAAAAAAADQ/C9bAqAHLPrc/photo.jpg?sz=50"
          }
          alt="Anh load bi loi"
          className="photoURL"
        />
      </div>
    ) : null;
  }
}
