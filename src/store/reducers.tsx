import { IAppState, IGIF } from '../interface/gif.interface';
import AT from './action-types';

const initialState: IAppState = {
  loading: false,
};

export default (state: IAppState = initialState, action: any) => {
  let newState: IAppState;
  switch (action.type) {
    case AT.LOAD_MORE_GIF:
      newState = {
        ...state,
        loading: true,
      };
      break;
    case AT.RESET:
      newState = {
        ...state,
        GIF: undefined,
      };
      break;
    case AT.LOAD_MORE_GIF_OK:
      const currentItems = state.GIF && state.GIF.items ? state.GIF.items : [];
      newState = {
        ...state,
        loading: false,
        GIF: {
          items: [...currentItems, ...action.payload.data],
          pagination: action.payload.pagination,
        },
      };
      break;
    case AT.HANDLE_SEARCH:
      newState = {
        ...state,
        searchGIF: {
          ...state.searchGIF,
          searchText: action.payload.searchText,
        },
      };
      break;
    case AT.LOAD_MORE_GIF_SEARCH:
      newState = {
        ...state,
        loading: true,
        searchGIF: {
          ...state.searchGIF,
        },
      };
      break;
    case AT.LOAD_MORE_GIF_SEARCH_OK_FIRST_LOAD:
      newState = {
        ...state,
        loading: false,
        GIF: {
          ...state.GIF,
          items: action.payload.data,
          pagination: action.payload.pagination,
        },
      };
      break;
    case AT.LOAD_MORE_GIF_SEARCH_OK:
      const currentSearchItems: IGIF[] =
        state.GIF && state.GIF.items ? state.GIF.items : [];
      newState = {
        ...state,
        loading: false,
        GIF: {
          ...state.GIF,
          items: [...currentSearchItems, ...action.payload.data],
          pagination: action.payload.pagination,
        },
      };
      break;
    case AT.DETAIL_GIF:
      newState = {
        ...state,
        GIF: {
          ...state.GIF,
          viewingItem: action.payload.data,
        },
        searchGIF: {
          searchText: '',
        },
      };
      break;
    default:
      newState = state;
  }
  return newState;
};
