import { useState, useEffect } from 'react';

export const useApiData = (input) => {
  const [ data, setData ] = useState(null);

  useEffect(() => {

    // Set cancelled = false in order to decide write data from api to state (setData)
    let cancelled = false;

    const url = 'https://api.chucknorris.io/jokes/';
    fetch(url.concat(input))
      .then(res => res.json())
      .then(data => cancelled || setData(data))
    return () => cancelled = true;
  }, [input])

  return data;
}
