import React, { Component } from "react";
import { Row, Input, Icon } from "react-materialize";
import "./style.css";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Row className="form" id="test">
          <Input placeholder="Placeholder aaaa" s={6} label="First Name" />
          <Input s={6} label="Last Name" />
          <Input
            s={12}
            label="disabled"
            defaultValue="I am not editable"
            disabled
          />
          <Input s={2} label="test" placeholder="test1" />

          <Input type="password" label="password" s={12} />
          <Input type="email" label="Email" s={12} />
        </Row>
        <Row className="form">
          <Input
            s={12}
            type="select"
            label="Materialize Select"
            icon="weekend"
            defaultValue="1"
          >
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Input>
        </Row>
      </div>
    );
  }
}
