import React, { Component } from "react";
import  hotel1 from "../img/hotel1.jpg";
import hotel3 from "../img/hotel2.jpg"
import hotel2 from "../img/hotel3.jpg"
import { Gallerys, item, photo } from "./Gallery.module.scss";
export default class Gallery extends Component {
  render() {
    return (
      <div className={Gallerys}>
        <figure className={item}>
          <img src={hotel1} alt="hotel" className={photo} />
        </figure>
        <figure className={item}>
          <img src={hotel2} alt="hotel" className={photo} />
        </figure>
        <figure className={item}>
          <img src={hotel3} alt="hotel" className={photo} />
        </figure>

      </div>
    );
  }
}
