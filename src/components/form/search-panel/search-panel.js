import React from 'react';

import './search-panel.scss';

const SearchPanel = (props) => {
  const { value, handleTerm } = props;
  return (
    <input type="text" value={value} placeholder="Free text search..." onChange={handleTerm} />
  );
}
export default SearchPanel;
