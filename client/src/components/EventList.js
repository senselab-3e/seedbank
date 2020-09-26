import React from "react";
import DeleteBt from "./DeleteBt";

export default function EventList(props) {
  const events = props.events;

  //   const deleteItem = (id) => {
  //     axios
  //       .delete(`/api/events/${id}`)
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  return (
    <div>
      <ul>
        {events.map(({ id, name, data }) => (
          <li key={id.toString()}>
            {name} {data}
            <DeleteBt id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
