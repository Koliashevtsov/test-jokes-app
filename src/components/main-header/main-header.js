import React from 'react';

import MovePanelBtn from '../move-panel-btn';
import './main-header.scss';

const MainHeader = (props) => {
  return (
    <div className="main-header">
      <p className="msi">MSI 2020</p>
      <MovePanelBtn/>
    </div>
  );
}
export default MainHeader;
