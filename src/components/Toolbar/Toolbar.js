import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from './../SideDrawer/DrawerToggleButton';

const toolbar = (props) => {
  return(
    <header className="toolbar">
      <nav className="toolbar-navigation">
        <div className="toolbar-toggle-button">
          <DrawerToggleButton clickDrawer={props.drawerToggleClickHandler} />
        </div>
        <div className="toolbar-logo"><a href="/">Logo</a></div>
        <div className="spacer" />
        <div className="toolbar-nav-items">
          <ul>
            <li><a href="/">Produtos</a></li>
            <li><a href="/">Usuários</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default toolbar;