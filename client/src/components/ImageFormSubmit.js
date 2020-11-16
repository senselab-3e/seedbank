import React from "react";

export default function ImageFormSubmit(props) {
  //i'm doing this in case i forget to passdown the prop element (or it's not needed), should i reuse this component
  const [className, setClassName] = React.useState(props.enabledClass || "");

  React.useEffect(() => {
    setClassName(props.enabledClass);
  }, [props.enabledClass]);

  return (
    <div className="second">
      <form encType="multipart/form-data">
        <input
          className={className}
          type="text"
          name="tendencies"
          placeholder="enter some tendencies (comma-separated)"
          onChange={props.onChange}
        />
        <input
          className={className}
          type="text"
          name="notes"
          placeholder=""
          onChange={props.onChange}
        />
      </form>
      <form encType="multipart/form-data">
        <input
          className={className}
          type="button"
          value="Upload"
          onClick={props.submit}
        />
      </form>
    </div>
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
