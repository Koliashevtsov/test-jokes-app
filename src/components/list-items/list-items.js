import React from 'react';

import ItemCard from '../item-card';

const ListItems = (props) => {
  // prop view set size ItemCard
  const { list, view } = props;
  return (
    <div className="list-items">
      <ul className="list-items-list">
        { list.map((item, index) => {
          return (
            <li className="item" key={index}>
              <ItemCard item={item} view={view}/>
            </li>
          );
        }) }
      </ul>
    </div>
  );
}
export default ListItems;
