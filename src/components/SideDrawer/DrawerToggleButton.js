import React from 'react';
import './DrawerToggleButton.css'

const DrawerToggleButton = (props) => {
  return(
    <button className="toggle-button" onClick={props.clickDrawer}>
      <i className="material-icons" style={{fontSize: '30px', color: 'white'}} >menu</i>
    </button>
  );
}

export default DrawerToggleButton;