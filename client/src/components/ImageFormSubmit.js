import React from "react";
// import axios from "axios";
// import { Component } from "react";

export default function ImageFormSubmit(props) {
  return (
    <form encType="multipart/form-data">
      <input
        className={props.enabledClass}
        type="text"
        name="tendencies"
        value={props.value}
        placeholder="enter some tendencies (comma-separated)"
        onChange={props.onChange}
      />
      <input
        className={props.enabledClass}
        type="text"
        name="notes"
        placeholder=""
        value={props.value}
        onChange={props.onChange}
      />
      <input
        className={props.enabledClass}
        type="button"
        value="Upload"
        onClick={props.submit}
      />
    </form>
  );
}

// class ImageFormSubmit extends Component{
// constructor(props) {
//     super(props);
//     this.state = {
//     //   image: "",
//       tendencies: "",
//       notes: "",
//       urlUploadImg: this.props.urlUploadImg,
//     //   saveImage: false,
//       enabledClass: this.props.enabledClass,
//     };
//     this.onChange = this.onChange.bind(this);
//     this.submit = this.submit.bind(this);
//     this.saveStatus = this.saveStatus.bind(this);
//   }
// //   const [tendencies, setTendencies] = useState("")
// //   const [notes, setNotes] = useState("")
// //   const [urlUploadImg, setImg]  = useState(props.urlUploadImg)
// //   const [enabledClass, setClassName] = useState(props.enabledClass)

// //   useEffect(()=>{
// //     setClassName(props.enabledClass)
// //   },[props.enabledClass])

//   const onChange = (e) => {
//     switch (e.target.name) {
//       case "tendencies":
//         //setTendencies(e.target.value)
//         this.setState({tendencies: e.target.value})
//         break;
//         case "notes":
//             //setNotes(e.target.value)
//             this.setState({notes: e.target.value})
//         break;
//       default:
//         this.setState({
//           [e.target.name]: e.target.value,
//         });

//     }
//   };

//   async function submit(e) {
//     e.preventDefault();

//     let formData = new FormData();
//     // eslint-disable-next-line
//     await Object.keys(this.state).map((key) => {
//       formData.append(key, this.state[key]);
//     });
//     axios
//       .post("/api/assets/images", formData, {
//         "content-type": "multipart/form-data",
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   return (
//     <>
//       <input
//         className={enabledClass}
//         type="text"
//         name="tendencies"
//         placeholder="enter some tendencies (comma-separated)"
//         value={this.state.value}
//         onChange={onChange}
//       />
//       <input
//         className={enabledClass}
//         type="text"
//         name="notes"
//         placeholder=""
//         value={this.state.value}
//         onChange={onChange}
//       />
//       <input
//         className={enabledClass}
//         type="button"
//         value="Upload"
//         onClick={submit}
//       />
//     </>
//   );
// }
