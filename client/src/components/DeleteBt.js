import React from "react";
import axios from "axios";

export default function DeleteBt(props) {
  const id = props.id; //id for individual el
  const pathway = props.path; //added for reusability of component. this allows the pathway for the api to change based on prop passed to it.
  const deleteItem = (id) => {
    console.log(props.apiListUpdate === true);
    axios
      .delete(`/api/${pathway}/${id}`)
      .then(() => {
        props.apiListUpdate();
        // console.log("deleted el : " + id); // if you bring this check back, pass 'id' in the () parameters again
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
