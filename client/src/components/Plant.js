import React, {Component} from 'react'
import "../style/plant.css";
import glitch from "../assets/img/404_glitch2.gif";


class Plant extends Component {

    render() {
      var names = [glitch, glitch, glitch, glitch, glitch, glitch, glitch];
      var namesList = names.map(function(name){
                       return ( <div className="img">
                                  <div className="img__content">
                                    <img key={name.toString()} src={name} alt="glitch"/>
                                  </div>
                                </div>);
                     })
                     
     return (
       <div className="divbody">
        <div className="main">
          <div className="scene">
            <div className="plant">
              {namesList}
            </div>
          </div>
          </div>
         </div>
      );
    }


}

export default Plant;
