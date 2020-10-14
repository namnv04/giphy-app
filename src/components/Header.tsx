import React from 'react';
import './Header.scss';

export default function Header() {
  return (
    <>
      <div id="header">
        <div id="main-logo">
          <h1>Giphy</h1>
        </div>
      </div>

      <div id="searchbox">
        <input
          id="search-input"
          type="text"
          placeholder="Search all GIFs"
        ></input>
        <button>SEARCH</button>
      </div>
    </>
  );
}
