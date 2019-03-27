import React from "react";
import CityCard from "./CityCard";

const getCities = cities => {
  return (
    <div>
      {cities.map(city => (
        <CityCard key={city.id} city={city} />
      ))}
    </div>
  );
};

const CityList = props => <div>{getCities(props.cities)}</div>;

export default CityList;
