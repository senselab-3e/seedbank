import React from "react";
import axios from "axios";

export default function ImagesGet() {
  const [images, setImages] = React.useState({});

  const getData = () => {
    console.log("new event added");
    axios
      .get("/api/assets/images")
      .then((images) => {
        setImages(images.data);
        console.log(images.data);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getData();
  }, []);

  const imageList = [];
  for (const key in images) {
    if (imageList.length < 10) {
      imageList.push(
        <li key={key}>
          {images[key].name}
          <img
            src={"../anarchive/assets/images" + images[key].path}
            alt={images[key].name}
          />
        </li>
      );
    }
    //console.log(images[key].name);
  }
  //console.log(images);

  return (
    <div>
      <ul>{imageList}</ul>
    </div>
  );
}

// export class ImagesGet extends Component {
//   constructor() {
//     super();
//     this.state = {
//       images: {},
//     };
//     console.log(this.state.images, "images");
//   }

//   getData = () => {
//     console.log("new event added");
//     axios
//       .get("/api/assets/images")
//       .then((images) => {
//         this.setState({
//           images: images.data,
//         });
//         console.log(images.data);
//       })
//       .catch((err) => console.log(err));
//   };

//   componentDidMount() {
//     this.getData();
//   }

//   render() {
//     return (
//       <div>
//         <ul>
//           {this.state.images.map(({ id, name, path }) => (
//             <li key={id.toString()}>
//               {name} {path}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default ImagesGet;

// import React from "react";
// import DeleteBt from "./DeleteBt";
// //import { UserId, UserName } from "./GetUser";
// export default function EventList(props) {
//   const events = props.events; //entire list of events saved on the db
//   //   const [currentUserName, setName] = useState("" || UserName);
//   //   const [currentUserId, setId] = useState("" || UserId);
//   //   console.log(currentUserName, currentUserId);
//   return (
//     <div>
//       <ul>
//         {events.map(({ id, name, data }) => (
//           <li key={id.toString()}>
//             {name} {data}
//             <DeleteBt updateList={props.updateList} id={id} path={"events"} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
