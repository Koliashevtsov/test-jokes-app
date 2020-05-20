import React from 'react';

const SearchPanel = (props) => {
  const { value, handleTerm } = props;
  return (
    <input type="text" value={value} placeholder="Free text search..." onChange={handleTerm} />
  );
}
export default SearchPanel;
