import React, { useEffect } from 'react';
import { debounce } from 'lodash';
import { RouteComponentProps, useHistory } from 'react-router-dom';

import './TrendingPage.scss';

const allGIFs = require('../mock/trendingGIFs.json');

export interface IGIF {
  id: string;
  images: {
    original: {
      url: string;
    };
  };
}

export default function TrendingPage() {
  const GIFs: IGIF[] = allGIFs.data;
  const history = useHistory();

  const openDetails = () => {
    history.push('/details');
  };

  useEffect(() => {
    window.onscroll = debounce(() => {
      // Checks that the page has scrolled to the bottom
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        console.log('load more', history);
      }
    }, 100);
  });
  return (
    <>
      <div className="trending-page">
        {GIFs.map((item) => (
          <span key={item.id} onClick={openDetails}>
            <img
              className="GIF-item"
              src={item.images.original.url}
              alt="this slowpoke moves"
            />
          </span>
        ))}
      </div>
    </>
  );
}
