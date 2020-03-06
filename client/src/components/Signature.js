import React, { Component } from "react";
import Bicho from "./Bicho";
import Doodle from "./Doodle";

export class Signature extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Bicho
            jsonData={require("../assets/signatures/bicho_1580267983731.json")}
            topPos={0}
            leftPos={0}
          />
          <Doodle
            topPos={this.props.offTop}
            leftPos={0}
            grabSign={this.props.grabSign}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Signature;
