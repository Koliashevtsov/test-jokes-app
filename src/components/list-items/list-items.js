import React from 'react';

import ItemCard from '../item-card';

const ListItems = (props) => {
  const { list } = props;
  return (
    <div>
      <ul>
        { list.map((item, index) => {
          return (
            <li key={index}>
              <ItemCard item={item}/>
            </li>
          );
        }) }
      </ul>
    </div>
  );
}
export default ListItems;
