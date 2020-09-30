import React from "react";
import DeleteBt from "./DeleteBt";
//import { UserId, UserName } from "./GetUser";
export default function EventList(props) {
  const events = props.events; //entire list of events saved on the db
  //   const [currentUserName, setName] = useState("" || UserName);
  //   const [currentUserId, setId] = useState("" || UserId);
  //   console.log(currentUserName, currentUserId);
  return (
    <div>
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
