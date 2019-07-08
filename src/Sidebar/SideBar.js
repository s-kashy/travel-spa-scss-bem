import React, { Component } from "react";
import {
  SideBars,
  sideNav,
  item,
  link,
  icon,
  legal,
  active
} from "./SideBar.module.scss";
export default class SideBar extends Component {
  render() {
    return (
      <div className={SideBars}>
        <ul className={sideNav}>
          <li className={`${item} ${active}`}>
            <a href="#/" className={link}>
              <span className={icon}>
                <i className="fas fa-home" />{" "}
              </span>
              <span>Home</span>
            </a>
          </li>
          <li className={`${item} ${active}`}>
            <a href="#/" className={link}>
              <span className={icon}>
                <i className="fas fa-plane-departure" />
              </span>
              <span>Flight</span>
            </a>
          </li>
          <li className={`${item} ${active}`}>
            <a href="#/" className={link}>
              <span className={icon}>
                <i className="fas fa-motorcycle" />
              </span>
              <span>Bike Tours</span>
            </a>
          </li>
          <li className={`${item} ${active}`}>
            <a href="#/" className={link}>
              <span className={icon}>
                <i className="fas fa-car" />
              </span>
              <span>Car Rental</span>
            </a>
          </li>
        </ul>
        <div className={legal}>&copy;Creat by Shlomo </div>
      </div>
    );
  }
}
