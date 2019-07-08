import React, { Component } from "react";
import Me from "../img/me.png";
import {
  Headers,
  logo,
  Search,
  input,
  btn,
  icon,
  userNav,
  iconBox,
  notification,
  User,
  pictureUser,
  nameUser
} from "./Header.module.scss";
import Logo from "../img/logo.png";
export default class Header extends Component {
  state = {
    place: ""
  };
  onChangeHandler = event => {};
  render() {
    return (
      <div className={Headers}>
        <img className={logo} src={Logo} alt="logo" />
        <form className={Search} action="#">
          <input
            placeholder="Enter the Place"
            value={this.state.place}
            onChange={e => this.onChangeHandler(e)}
            className={input}
          />
          <button className={btn}>
            <span className={icon}>
              <i className="fas fa-search" />
            </span>
          </button>
        </form>
        <div className={userNav}>
          <div className={iconBox}>
            <i className="fas fa-bookmark" />
            <span className={notification}>7</span>
          </div>
          <div className={iconBox}>
            <i className="far fa-comment" />
            <span className={notification}>15</span>
          </div>
        
        <div className={User}>
          <img src={Me} alt="my-pictrue" className={pictureUser} />
          <span className={nameUser}>Shlomo</span>
        </div>
        </div>
      </div>
    );
  }
}
