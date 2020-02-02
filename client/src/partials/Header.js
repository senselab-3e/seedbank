import React, { Component } from 'react';
import teapot from '../assets/img/pot.jpg';
import '../style/Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <img className='Cup' src={teapot} alt='teapot' />
      </div>
    );
  }
}
