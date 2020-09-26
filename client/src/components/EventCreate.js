//import React, { Component } from "react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function EventCreate(props) {
  //const [inputs, setInputs] = useState("");

  const [eventName, setName] = useState("");
  const [eventSponges, setSponges] = useState("");
  //const [currentUser, setUser]= useState('');

  //const currentUser = () =>{}

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/events", {
        name: eventName,
        sponges: eventSponges,
      })
      .then((e) => {
        console.log("Created event: ");
      })
      .catch((err) => {
        console.log(err);
      });
    //after the data is submitted - then alert that a newEvent has been added, to refresh the view of eventList
    props.updateList();
  };

  useEffect(() => {});
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Create an evenmnnfdt <br /> <br />
          <input
            type="text"
            name="name"
            placeholder="name"
            value={eventName}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="sponges"
            placeholder="sponges"
            value={eventSponges}
            onChange={(e) => setSponges(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Create" />
      </form>
    </div>
  );
}

//OLD STATE METHOD

// class EventCreate extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       eventname: "",
//       sponges: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.submit = this.submit.bind(this);
//   }

//   handleChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   }

//   submit(e) {
//     e.preventDefault();
//     this.props.newEvent();
//     axios
//       .post("/api/events", {
//         name: this.state.eventname,
//         sponges: this.state.sponges,
//       })
//       .then((event) => {
//         console.log("Created event: " + event);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   render() {
//     return (
//       <form onSubmit={this.submit}>
//         <label>
//           {" "}
//           Create an evenmnnfdt <br /> <br />
//           <input
//             type="text"
//             name="eventname"
//             placeholder="name"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />{" "}
//           <input
//             type="text"
//             name="sponges"
//             placeholder="sponges"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />{" "}
//         </label>{" "}
//         <br />
//         <input type="submit" value="Create" />
//       </form>
//     );
//   }
// }

// export default EventCreate;
