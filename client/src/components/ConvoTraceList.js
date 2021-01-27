import React, { Component } from "react";

class ConvoTraceList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.traces.map(({ id, title, body, img=null }) => (
            <>
            <li key={id.toString()}>
              {title} {body}
            </li>
            { img ? <img src={img} height="130px" width="130px"/> : <></> }
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default ConvoTraceList;
