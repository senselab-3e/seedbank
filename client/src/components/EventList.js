import React from "react";
import DeleteBt from "./DeleteBt";
import GetUser from "./GetUser";
export default function EventList(props) {
  const events = props.events; //entire list of events saved on the db
  return (
    <div>
      <GetUser />
      <ul>
        {events.map(({ id, name, data }) => (
          <li key={id.toString()}>
            {name} {data}
            <DeleteBt updateList={props.updateList} id={id} path={"events"} />
          </li>
        ))}
      </ul>
    </div>
  );
}
