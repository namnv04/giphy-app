import React, { useEffect } from 'react';
import { debounce } from 'lodash';
import { useHistory, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadMore, handleSearch } from '../store/actions';

import './TrendingPage.scss';
import { IGIF } from '../interface/gif.interface';
import {
  getGIFs,
  getSearcgGIFs,
  isLoading,
  isShowingSearchResults,
} from '../store/selectors';

function TrendingPage({
  loadMore,
  getGIFs,
  getSearcgGIFs,
  isLoading,
  isShowingSearchResults,
  isSearchingGIF,
  handleSearch,
}: {
  loadMore: Function;
  getGIFs?: IGIF[];
  getSearcgGIFs?: IGIF[];
  isLoading: boolean;
  isShowingSearchResults: boolean;
  isSearchingGIF: boolean;
  handleSearch: Function;
}) {
  const history = useHistory();

  const openDetails = (id: string) => {
    history.push(`/details/${id}`);
  };

  useEffect(() => {
    if (!getGIFs?.length && isLoading !== true) {
      loadMore();
    }
  });

  const handleLoadMore = () => {
    if (isShowingSearchResults === true && isSearchingGIF !== true) {
      handleSearch();
    } else if (isLoading !== true) {
      loadMore();
    }
  };

  window.onscroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      handleLoadMore();
    }
  }, 500);

  const listItem = isShowingSearchResults === true ? getSearcgGIFs : getGIFs;

  return (
    <>
      <div className="trending-page">
        {listItem &&
          listItem.map((item) => (
            <span key={item.id} onClick={() => openDetails(item.id)}>
              <img
                className="GIF-item"
                src={item.images.original.url}
                alt={item.title}
              />
            </span>
          ))}
      </div>
      {isLoading === true && <div className="loading-icon">Loading...</div>}
    </>
  );
}

export const mapStateToProps = (state: any) => ({
  getGIFs: getGIFs(state),
  getSearcgGIFs: getSearcgGIFs(state),
  isLoading: isLoading(state),
  isShowingSearchResults: isShowingSearchResults(state),
});

export const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  loadMore: () => dispatch(loadMore()),
  handleSearch: (searchText?: string) => dispatch(handleSearch(searchText)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TrendingPage)
);
