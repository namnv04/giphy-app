import { IAppState, IGIFResponse } from '../interface/gif.interface';
import AT from './action-types';

const giphyURL = `https://api.giphy.com/v1/gifs`;
const defaultLimit = 10;

export const handleSearch = (searchText?: string) => async (
  dispatch: Function,
  getState: Function
) => {
  const state: IAppState = getState();

  const isFirstLoad = !state.searchGIF?.searchText || searchText !== undefined;

  searchText = searchText ? searchText : state.searchGIF?.searchText;

  dispatch({
    type: AT.HANDLE_SEARCH,
    payload: { searchText },
  });

  const params = {
    limit: defaultLimit,
    offset: 0,
  };
  if (
    state &&
    state.GIF &&
    state.GIF.pagination &&
    state.GIF.pagination.count
  ) {
    params.offset = state.GIF.pagination.offset + state.GIF.pagination.count;
  }
  const queryParams = `q=${searchText}&limit=${params.limit}&offset=${params.offset}`;
  dispatch({
    type: AT.LOAD_MORE_GIF_SEARCH,
  });
  const res = await fetch(
    `${giphyURL}/search?api_key=c8Ix8T5f04LVwXgBMKwqCGPT9mKLccTs&${queryParams}`
  );
  const gifResponse: IGIFResponse = await res.json();
  if (isFirstLoad) {
    // first search load
    dispatch({
      type: AT.LOAD_MORE_GIF_SEARCH_OK_FIRST_LOAD,
      payload: gifResponse,
    });
  } else {
    // Load more on search
    dispatch({
      type: AT.LOAD_MORE_GIF_SEARCH_OK,
      payload: gifResponse,
    });
  }
};

export const loadMore = () => async (
  dispatch: Function,
  getState: Function
) => {
  const state: IAppState = getState();

  const params = {
    limit: defaultLimit,
    offset: 0,
  };
  if (
    state &&
    state.GIF &&
    state.GIF.pagination &&
    state.GIF.pagination.count
  ) {
    params.offset = state.GIF.pagination.offset + state.GIF.pagination.count;
  }

  const queryParams = `limit=${params.limit}&offset=${params.offset}`;
  dispatch({
    type: AT.LOAD_MORE_GIF,
  });
  const res = await fetch(
    `${giphyURL}/trending?api_key=c8Ix8T5f04LVwXgBMKwqCGPT9mKLccTs&${queryParams}`
  );
  const gifResponse: IGIFResponse = await res.json();
  dispatch({
    type: AT.LOAD_MORE_GIF_OK,
    payload: gifResponse,
  });
};

export const getDetail = (id: string) => async (
  dispatch: Function,
  getState: Function
) => {
  const res = await fetch(
    `${giphyURL}/${id}?api_key=c8Ix8T5f04LVwXgBMKwqCGPT9mKLccTs`
  );
  const gifResponse: IGIFResponse = await res.json();
  dispatch({
    type: AT.DETAIL_GIF,
    payload: gifResponse,
  });
};
