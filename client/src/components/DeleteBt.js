import React from "react";
import axios from "axios";

export default function DeleteBt(props) {
  const id = props.id;
  //const callbackUpdate = props.update

  const deleteItem = (id) => {
    axios
      .delete(`/api/events/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <button onClick={() => deleteItem(id)} className="delete-btn">
        x
      </button>
    </div>
  );
}
