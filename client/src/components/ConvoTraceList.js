import React, { Component } from "react";

class ConvoTraceList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.traces.map(({ id, title, body, img }) => (
            <>
            <li key={id.toString()}>
              {title} {body}
            </li>
            {/*<img src={img}/>*/}
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default ConvoTraceList;
