import React from 'react';

import './category-icon.scss';

const CategoryIcon = (props) => {
  const { item, selectedItem } = props;

  const clazzName = item === selectedItem ? 'selected' : '';
  return (
    <span className={`category-icon ${clazzName}`}>
      { item }
    </span>
  );
}
export default CategoryIcon;
