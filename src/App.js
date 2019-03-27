import React, { Component } from "react";
import Cities from "./components/City/Cities";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    const cities = [
      {
        id: 1,
        cityName: "Berlin",
        country: "Germany",
        copyText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada ac turpis egestas sed tempus."
      },
      {
        id: 2,
        cityName: "Paris",
        country: "France",
        copyText:
          "Nibh tortor id aliquet lectus proin nibh nisl. Placerat in egestas erat imperdiet sed euismod nisi porta. Amet mattis vulputate enim nulla aliquet."
      },
      {
        id: 3,
        cityName: "Rome",
        country: "Italy",
        copyText:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident. "
      }
    ];

    return (
      <div className="App">
        <Cities cities={cities} />
      </div>
    );
  }
}

export default App;
