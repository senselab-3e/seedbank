import React from "react";
import DeleteBt from "./DeleteBt";
import axios from "axios";
export default function EventList(props) {
  const events = props.events;

  const deleteItem = (id) => {
    axios
      .delete(`/api/events/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    props.updateList();
  };

  return (
    <div>
      <ul>
        {events.map(({ id, name, data }) => (
          <li key={id.toString()}>
            {name} {data}
            <button onClick={() => deleteItem(id)} className="delete-btn">
              x
            </button>
            <DeleteBt updateList={props.updateList} id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
