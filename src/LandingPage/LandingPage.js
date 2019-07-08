import React, { Component } from "react";
import { main, Details,info } from "./LandingPage.module.scss";
import {paragraph,Typographe} from "../scss/typogrphe.module.scss"
import Gallerys from "../Gallery/Gallery";
import OverView from "../overView/OverView";
import Cards from "../Card/Card"

export default class LandingPage extends Component {
  render() {
    return (
      <main className={main}>
        <Gallerys />
        <OverView />
        <div className={Details}>
        <div className={info} >
          <p className={paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            doloribus dolorem fuga vero alias pariatur eius porro nemo amet
            voluptatum dignissimos cumque, aliquid incidunt, magni voluptate.
            Mollitia temporibus eligendi quae!
          </p>
          <p className={ paragraph}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit
           Maxime, fuga. Adipisci, quod quis consequuntur officia minima voluptatem aliquid ducimus ut quaerat 
          similique praesentium eos delectus deserunt excepturi 
          fugiat sunt impedit?</p>
        </div>
        <div>
<Cards/>
        </div>
        </div>
      </main>
    );
  }
}
