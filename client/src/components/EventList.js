import React from "react";
import DeleteBt from "./DeleteBt";
export default function EventList(props) {
  const events = props.events; //entire list of events saved on the db
  return (
    <div>
      <ul>
        {events.map(({ id, name, data }) => (
          <li key={id.toString()}>
            {name} {data}
            <DeleteBt updateList={props.updateList} id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
