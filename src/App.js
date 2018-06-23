import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {sideDrawerOpen: false};
  }

  drawerClickHandler = () => {
    // Utilizar o setState dessa forma quando for utilizar o state anterior.
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      };
    });
  }

  backDropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
    let backDrop;

    if(this.state.sideDrawerOpen) {
      backDrop = <BackDrop closeSideDrawer={this.backDropClickHandler} />;
    }

    return (
      <div style={{height: 'calc(100vh - 80px)'}}>
        <Toolbar drawerToggleClickHandler={this.drawerClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <main style={{marginTop: "64px"}}>
          <p>Isso é um conteúdo!</p>
        </main>
      </div>
    );
  }
}

export default App;
