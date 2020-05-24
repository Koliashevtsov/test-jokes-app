import React from 'react';

import LikeIconContainer from '../../containers/like-icon-container';
import IconComment from './icon-comment';
import JokeLink from './joke-link';
import JokeFooter from './joke-footer';

import './item-card.scss';

const ItemCard = (props) => {
  const { item, view } = props;
  const clazzName = view === 'small' ? 'small' : ''
  return (
    <div className={`item-card ${clazzName}`}>
      <LikeIconContainer id={item.id}/>
      <div className="squiare">
        <IconComment view={view}/>
        <div className="joke-fields">
          <JokeLink item={item}/>
          <div className="joke-value">
            { item.value }
          </div>
          <JokeFooter item={item} view={view}/>
        </div>
      </div>
    </div>
  );
}
export default ItemCard;
