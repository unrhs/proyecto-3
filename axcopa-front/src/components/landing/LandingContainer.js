import React, { Component } from "react";
import Slider from "./Slider";
import Card from "./Card";
import Discounts from "./Discounts";
import ads from "../../assets/json/ads";
class LandingContainer extends Component {
  // onLogin=()=>{
  //   login().then(r=>
  //     {
  //       let user = r.user
  //       if(user.rol === 'Admin'){
  //         this.props.history.push('/admin')
  //       }else{

  //         this.props.history.push('/user')
  //       }

  //     })
  // }

  render() {
    return (
      <div>
        <Slider />
        <div style={{ padding: 20 }}>
          <Card />
        </div>
        <Discounts ads={ads} />
      </div>
    );
  }
}

export default LandingContainer;
