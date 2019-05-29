import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/searchBar/SearchBar";
import Cards from "./components/cards/cards";

const API = "http://api.apixu.com/v1/forecast.json?";
const APIKEY = "key=034d5383f82147bdad391238192905";
const DAYS = "&days=3";
const LOCATION = "&q=";

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      forecastDay: []
    };

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData = city => {
    fetch(API + APIKEY + LOCATION + city + DAYS)
      .then(res => res.json())
      .then(data =>
        this.setState({
          forecastDay: data.forecast.forecastday
        })
      );
  };

  updateStateOnSearch = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div className="app">
        <SearchBar
          value={this.state.search}
          onChange={this.updateStateOnSearch.bind(this)}
          onClick={() => this.fetchData(this.state.search)}
        />
        <div className="days-container">
          <Cards data={this.state.forecastDay} />
        </div>
      </div>
    );
  }
}

export default App;
