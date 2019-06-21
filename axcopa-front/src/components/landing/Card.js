import React from "react";
import Card1 from "../../assets/images/card1.png";
import Card2 from "../../assets/images/card2.jpg";

const Card = () => (
  <div
    className="uk-child-width-1-2@m  uk-flex uk-flex-wrap uk-flex-center"
    uk-grid="true"
  >
    <div className="uk-card uk-card-small uk-card-default">
      <div className="uk-card-media-top">
        <img src={Card1} alt="" />
      </div>
      <div className="uk-card-body">
        <h3 className="uk-card-title">Media Top</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
    </div>

    <div className="uk-card uk-card-small uk-card-default">
      <div className="uk-card-body">
        <h3 className="uk-card-title">Media Bottom</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="uk-card-media-bottom">
        <img src={Card2} alt="" />
      </div>
    </div>
  </div>
);

export default Card;
