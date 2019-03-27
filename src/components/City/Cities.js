import React from "react";
import CityCard from "./CityCard";
import { Column, Container, Section } from "react-bulma-components/full";

const Cities = props => {
  console.log(props);
  const eachCity = props.cities.map(city => (
    <CityCard key={city.id} city={city} />
  ));

  return (
    <div className="section">
      <div className="container">
        <div className="columns">{eachCity}</div>
      </div>
    </div>
  );
};

export default Cities;
