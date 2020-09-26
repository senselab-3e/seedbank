import React from "react";

export default function EventList(props) {
  const events = props.events;
  return (
    <div>
      <ul>
        {events.map(({ id, name, data }) => (
          <li key={id.toString()}>
            {name} {data}
          </li>
        ))}
      </ul>
    </div>
  );
}
