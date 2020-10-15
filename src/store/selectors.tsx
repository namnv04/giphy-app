import { IAppState } from '../interface/gif.interface';

export const isLoading = (state: IAppState) => {
  return state.loading;
};
export const getGIFs = (state: IAppState) => {
  return state.GIF?.items;
};
export const getSearcgGIFs = (state: IAppState) => {
  return state.GIF?.items;
};
export const isShowingSearchResults = (state: IAppState) => {
  return !!state.searchGIF?.searchText;
};
export const getViewingItem = (state: IAppState) => {
  return state.GIF?.viewingItem;
};
