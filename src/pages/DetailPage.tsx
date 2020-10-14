import React from 'react';
import './DetailPage.scss';

export default function DetailPage() {
  return (
    <>
      <div className="detail-page">
        <div className="left">Left</div>
        <div className="right">
          <img
            className="GIF-item"
            src="https://media0.giphy.com/media/efHzrjcG43LpzGAbWu/giphy.gif?cid=b4fc183fq7bx0a6028rpl6jyjwxyqes9oo5hoj396cgnycdd&rid=giphy.gif"
            alt="this slowpoke moves"
          />
        </div>
      </div>
    </>
  );
}
