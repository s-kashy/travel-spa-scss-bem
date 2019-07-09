import React, { Component } from "react";
import { List, item, icon } from "./Info.module.scss";

export default class Info extends Component {
  render() {
    return (
      <div>
        <ul className={List}>
          <li className={item}>
            <span className={icon}>
              <i class="far fa-dot-circle" />
            </span>
            close to the beach
          </li>
          <li className={item}>
            <span className={icon}>
              <i class="far fa-dot-circle" />
            </span>
            free wifi
          </li>
          <li className={item}>
            <span className={icon}>
              <i class="far fa-dot-circle" />
            </span>
            great bar
          </li>
          <li className={item}>
            <span className={icon}>
              <i class="far fa-dot-circle" />
            </span>
            near shopping mall
          </li>
          <li className={item}>
            <span className={icon}>
              <i class="far fa-dot-circle" />
            </span>
            close restaurants
          </li>
          <li className={item}>
            <span className={icon}>
              <i class="far fa-dot-circle" />
            </span>
            Sport activity
          </li>
          <li className={item}>
            <span className={icon}>
              <i class="far fa-dot-circle" />
            </span>
            night club
          </li>
          <li className={item}>
            <span className={icon}>
              <i class="far fa-dot-circle" />
            </span>
            beach rentals
          </li>
        
        </ul>
      </div>
    );
  }
}
