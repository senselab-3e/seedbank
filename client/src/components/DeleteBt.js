import React from "react";
import axios from "axios";

export default function DeleteBt(props) {
  const id = props.id; //id for individual el

  const deleteItem = (id) => {
    axios
      .delete(`/api/events/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    props.updateList(); // callback up the parent stack to events page for re-querying the db for the list of events
  };
  return (
    <div>
      <button onClick={() => deleteItem(id)} className="delete-btn">
        x
      </button>
    </div>
  );
}
