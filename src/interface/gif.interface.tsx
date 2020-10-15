export interface IGIF {
  id: string;
  title: string;
  images: {
    original: {
      url: string;
    };
  };
}

export interface IGIFResponse {
  data: IGIF[];
  meta: any;
  pagination: {
    count: number;
    offset: number;
    total_count: number;
  };
}

export interface IAppState {
  loading: boolean;
  GIF?: {
    items?: IGIF[];
    viewingItem?: IGIF;
    pagination?: {
      total_count: number;
      count: number;
      offset: number;
    };
  };
  searchGIF?: {
    searchText?: string;
  };
}
