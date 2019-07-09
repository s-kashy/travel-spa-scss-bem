import React, { Component, Fragment } from "react";
import { Cards, review, detailCard, photo } from "./Card.module.scss";
import user1 from "../img/user-1.jpg";
import user2 from "../img/user-2.jpg"
export default class Card extends Component {
  render() {
    return (
      <Fragment>
        <div className={Cards}>
          <figure className={review}>
            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              expedita tempore minima optio error inventore dolores sint.
              Laborum harum, soluta sed omnis ipsam nulla totam officia,
              doloribus explicabo, ullam commodi.
            </blockquote>

            <figcaption className={detailCard}>
              <img src={user1} alt="user" className={photo} />
              <div>
                <p>dani hiam</p>
                <p>2019</p>
              </div>
            </figcaption>
          </figure>
          <figure className={review}>
            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              expedita tempore minima optio error inventore dolores sint.
              Laborum harum, soluta sed omnis ipsam nulla totam officia,
              doloribus explicabo, ullam commodi.
            </blockquote>

            <figcaption className={detailCard}>
              <img src={user2} alt="user" className={photo} />
              <div>
                <p>Danna ben-haim</p>
                <p>2019</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </Fragment>
    );
  }
}
