import React, { useState, useEffect } from 'react';

import './input-radio.scss';

const InputRadio = (props) => {
  const { cont, isActive, changeIsActive } = props;

  const clazzName = cont === isActive ? 'checked' : '';

  const handleInput = () => {
    changeIsActive(cont)
  }

  return (
    <div className="input-radio">
      <span className={`radio-indicator ${clazzName}`} onClick={handleInput}><span className="point"></span></span>
      <label className="label" onClick={handleInput}>{cont}</label>
      { cont === isActive && props.children }
    </div>
  );
}
export default InputRadio;
