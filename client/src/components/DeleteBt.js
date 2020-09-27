import React from "react";
import axios from "axios";

export default function DeleteBt(props) {
  const id = props.id; //id for individual el
  const pathway = props.path; //added for reusability of component. this allows the pathway for the api to change based on prop passed to it.
  const deleteItem = (id) => {
    console.log(props.updateList === true);
    axios
      .delete(`/api/${pathway}/${id}`)
      .then((id) => {
        props.updateList();
        console.log("deleted el : " + id);
      })
      .catch((err) => {
        console.log(err);
      });

    // if (props.updateList) {
    //   props.updateList();
    // } else {
    //   console.log(
    //     "prop for GET of the db list has not been passed to this component"
    //   );
    // } // callback up the parent stack to events page for re-querying the db for the list of events
  };
  return (
    <div>
      <button onClick={() => deleteItem(id)} className="delete-btn">
        x
      </button>
    </div>
  );
}
