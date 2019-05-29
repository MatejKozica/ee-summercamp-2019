import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="search-box">
      <input
        className="search-txt"
        type="text"
        placeholder="Search cities"
        value={props.value}
        onChange={props.onChange}
      />
      <a className="search-btn" onClick={props.onClick}>
        <i className="fas fa-search" />
      </a>
    </div>
  );
};

export default SearchBar;
