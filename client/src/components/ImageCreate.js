import React, { Component } from 'react'
import axios from 'axios';

class ImageCreate extends Component {

  constructor(props) {
    super(props);
    this.state = {image:'', tendencies: '', notes: ''};
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange(e) {
    switch (e.target.name) {
      case 'image':
        this.setState({ image: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  }

  async submit(e) {
    e.preventDefault(); // <-- not sure if this should be there or not; actually, this might be the problem, but I don't fully understand it yet

    let formData = new FormData();
    // console.log(this.state.image); // <-- this works
    await formData.append('image', this.state.image);
    // console.log(formData.get('image'));
    // note that FormData can't be logged; this is normal

    axios.post('/api/assets/images', formData, {'content-type': 'multipart/form-data'})
    .catch(err => { console.log(err); });
  }

  render() {
    return (
      <form encType="multipart/form-data">
        <label>Upload an image
        <br/><br/>
        <input type="text" name="tendencies" placeholder="tendencies (comma-separated)" value={this.state.value} onChange={this.onChange}/>
        <input type="text" name="notes" placeholder="notes" value={this.state.value} onChange={this.onChange}/>
        <br/><br/>
        <input type="file" name="image" onChange={this.onChange}/>
        <br/><br/>
        <input type="button" value="Upload" onClick={this.submit}/>
        </label>
      </form>
    )
  }
}

export default ImageCreate
