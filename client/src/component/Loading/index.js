import React, { Component } from "react";
import "./style.css";

export default class Loadding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      showImage: false
    };
    props.onRef(this);
  }

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
    return this.state.isShow ? (
      <div className="container">
        <div className="container-image">
          <img src="../../asset/load2.gif" className="image0" alt="Khong load dc anh" />
          <img src="../../asset/load2.gif" className="image1" alt="Khong load dc anh" />
          <img src="../../asset/load2.gif" className="image2" alt="Khong load dc anh" />
          <img src="../../asset/load2.gif" className="image3" alt="Khong load dc anh" />
        </div>
      </div>
    ) : null;
  }
}
