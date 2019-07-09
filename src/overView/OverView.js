import React, { Component } from "react";
import {
  Typographe,
  bigTypographe,
  smallTypographe
} from "../scss/typogrphe.module.scss";
import { OverViews, itemRight, itemLeft,avg} from "./OverView.module.scss";
export default class OverView extends Component {
  render() {
    return (
      <div className={OverViews}>
        <div className={`${Typographe} ${itemLeft}`}>
          <p className={bigTypographe}>Welcome to the hotel</p>
        </div>
        <div className={` ${Typographe} ${itemRight} `}>
          <p className={smallTypographe}>Israel Tel-Aviv</p>
          <p className={`${smallTypographe} ${avg}`}>Avg 8.6</p>
        </div>
      </div>
    );
  }
}
