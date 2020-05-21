import React from 'react';

import './like-icon.css';

const LikeIcon = (props) => {
  const { isFavorite, handleLikeClick } = props;
  const clazzName = isFavorite ? 'liked' : ''
  return (
    <div className={clazzName} onClick={handleLikeClick}>
      LikeIcon
    </div>
  );
}
export default LikeIcon;
