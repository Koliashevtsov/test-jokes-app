import React, { useState, useEffect } from 'react';

const InputRadio = (props) => {
  const { cont, isActive, changeIsActive } = props;

  const handleInput = () => {
    changeIsActive(cont)
  }

  return (
    <>
      <input name="jokes" type="radio" onChange={handleInput} checked={cont === isActive}/>
      <label>{cont}</label>
      { cont === isActive && props.children }
    </>
  );
}
export default InputRadio;
