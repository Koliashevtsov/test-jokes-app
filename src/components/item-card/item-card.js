import React from 'react';

import LikeIconContainer from '../../containers/like-icon-container';

const ItemCard = (props) => {
  const { item } = props;
  return (
    <div>
      <LikeIconContainer id={item.id}/>
      <div>{ item.value }</div>
    </div>
  );
}
export default ItemCard;
