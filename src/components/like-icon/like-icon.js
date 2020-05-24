import React from 'react';

import Icon from './icon';

import './like-icon.scss';

const LikeIcon = (props) => {
  const { isFavorite, handleLikeClick } = props;

  const icon = isFavorite ? 'liked' : 'unliked'
  return (
    <div className="like-icon" onClick={handleLikeClick}>
      <Icon icon={icon}/>
    </div>
  );
}
export default LikeIcon;
