import React, { Component } from "react";
import { main } from "./LandingPage.module.scss";
import Gallerys from "../Gallery/Gallery";
import OverView from "../overView/OverView";
export default class LandingPage extends Component {
  render() {
    return (
      <main className={main}>
        <Gallerys />
        <OverView />
      </main>
    );
  }
}
