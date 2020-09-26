import React from "react";
import axios from "axios";
export default function EventList(props) {
  const events = props.events;

  //   <button onClick={() => } className="delete-btn">
  //   x
  // </button>
  // eslint-disable-next-line
  const deleteItem = (id, e) => {
    e.preventDefault();
    axios
      .delete(`/api/events/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const itemId = (id) => {
    axios
      .get(`/api/events/${id}`)
      .then(console.log(id))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <ul>
        {events.map(({ id, name, data }) => (
          <li key={id.toString()}>
            {name} {data}
            <button onClick={(e) => itemId(id)} className="delete-btn">
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
