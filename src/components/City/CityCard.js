import React from "react";
import { Card, Column } from "react-bulma-components/full";

const CityCard = props => {
  console.log(props);

  return (
    <div className="column is-one-third">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/640x480.png"
              alt="Placeholder image"
            />
          </figure>
          <div className="card-content">
            <p className="title is-3">{props.city.cityName}</p>
            <p className="subtitle is-5">{props.city.country}</p>
            <div className="content">{props.city.copyText}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
