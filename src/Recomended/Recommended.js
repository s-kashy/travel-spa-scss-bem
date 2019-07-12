import React, { Component } from "react";
import { Recommend,photo,friend} from "./Recommended.module.scss";
import user4 from "../img/user-4.jpg";
import user5 from "../img/user-5.jpg"
import user6 from "../img/user-6.jpg"
import { paragraph } from "../scss/typogrphe.module.scss";

export default class Recommended extends Component {
  render() {
    return (
      <div className={Recommend}>
        <p className={paragraph}>The friend that recommend this </p>
        <div className={friend}>
          <img className={photo} src={user4} alt="friend" />
          <img className={photo} src={user5} alt="friend" />
          <img className={photo} src={user6} alt="friend" />
        </div>
      </div>
    );
  }
}
