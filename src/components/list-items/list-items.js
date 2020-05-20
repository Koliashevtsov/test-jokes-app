import React from 'react';

const ListItems = (props) => {
  const { list } = props;
  return (
    <div>
      <ul>
        { list.map((item, index) => {
          return (
            <li key={index}>
              { item.value }
            </li>
          );
        }) }
      </ul>
    </div>
  );
}
export default ListItems;
