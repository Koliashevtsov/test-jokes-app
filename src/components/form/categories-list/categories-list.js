import React, { useState } from 'react';

import CategoryIcon from '../../category-icon';
import './categories-list.scss';

const CategoriesList = (props) => {
  const { list, handleTerm } = props;

  const [ selectedItem, setSelectedItem ] = useState(null);

  const handleClick = (item) => {
    // setting selectedItem and transfer it to component CategoryIcon
    setSelectedItem(item);
    // transfer item to component above
    handleTerm(item)
  }

  return (
    <div className="categories-list">
      <ul className="items">
        { list.map((item, index) => {
          return (
            <li className="item" key={index} onClick={() => handleClick(item)}>
              <CategoryIcon item={item} selectedItem={selectedItem}/>
            </li>
          );
        }) }
      </ul>
    </div>
  );
}
export default CategoriesList;
