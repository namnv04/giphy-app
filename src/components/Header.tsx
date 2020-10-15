import React, { useState } from 'react';
import { useHistory, withRouter } from 'react-router';
import './Header.scss';
import { connect } from 'react-redux';
import { handleSearch } from '../store/actions';

function Header({ handleSearch }: { handleSearch: Function }) {
  const history = useHistory();
  const [searchText, setSearchText] = useState('');

  const doSearch = () => {
    if (searchText.trim()) {
      handleSearch(searchText);
      history.push('/');
    }
  };

  return (
    <>
      <div id="header">
        <div id="main-logo">
          <h1 onClick={() => history.push(`/`)}>Giphy</h1>
        </div>
      </div>

      <div id="searchbox">
        <input
          id="search-input"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search all GIFs"
        ></input>
        <button onClick={doSearch}>SEARCH</button>
      </div>
    </>
  );
}

export const mapStateToProps = (state: any) => ({});

export const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  handleSearch: (searchText: string) => dispatch(handleSearch(searchText)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
