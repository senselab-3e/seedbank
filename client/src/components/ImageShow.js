import React, { Component } from 'react'
import axios from 'axios';


class ImageShow extends Component {
  constructor() {
    super();
    this.state = {
      image: ''
    };
  }

  checkForUpdates = () => {
      axios
        .get('/api/assets/images/:190')
        .then(image => {
          // console.log(response);
          this.setState({
            image: image.data
          });
        })
        .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
    };
    componentDidMount() {
      this.checkForUpdates();
    }

  render() {
    return (
      <div>
      hey
      <img src={this.state.image} alt="ola"/>
      </div>
    )
  }
//   constructor(props) {
//     super(props);
//     this.state = {id: 6, image:'', tendencies: '', notes: ''};
//     // this.onChange = this.onChange.bind(this);
//     this.componentDidMount = this.componentDidMount.bind(this);
//   }
//
//   componentDidMount() {
//
//   axios.get('api/assets/images', 'images/6')
//
//   .catch(err => { console.log(err); });
//   // .then(function (res) {
//   //   // handle success
//   //   // const image = response.name;
//   //   // this.setState({ image });
//   //
//   //   console.log(res);
//   //   // console.log(response.data);
//   // })
//   // .catch(function (error) {
//   //   // handle error
//   //   console.log(error);
//   // })
//   // .then(function () {
//   //   // always executed
//   //   console.log('hehe');
//   // });
//   }
//
//   render() {
//     return (
// <ul>
//         hi: <img src={this.state.image} alt="hm"/>
// </ul>
//     )
//   }
}

export default ImageShow
