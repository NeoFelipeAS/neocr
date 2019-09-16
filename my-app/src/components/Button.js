import React from "react";
import { Button as GrommetBtn } from "grommet";

class Button extends React.Component {
  render() {
    return <GrommetBtn label={this.props.label} {...this.props} />;
  }
}

export default Button;
