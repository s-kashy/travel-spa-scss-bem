import React, { Component } from "react";
import Header from "./Header/Header";
import "./App.scss";
import SideBar from "./Sidebar/SideBar";
import LandingPage from "./LandingPage/LandingPage";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <SideBar />
          <LandingPage />
          
        </div>
      </div>
    );
  }
}

export default App;
