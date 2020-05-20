import React, { useEffect } from 'react';

import { useApiData } from '../../../hooks';


const CategoriesList = (props) => {
  const { list, handleTerm } = props;
  
  return (
    <div>
      <ul>
        { list.map((item, index) => {
          return (
            <li key={index} onClick={() => handleTerm(item)}>
              {item}
            </li>
          );
        }) }
      </ul>
    </div>
  );
}
export default CategoriesList;
