import React from "react";

import TopNav from "./top-nav";

import "./header.css";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <TopNav
          onReadStatus={this.props.onReadStatus}
          onNewGame={this.props.onNewGame}
        />
        <h1>HOT or COLD</h1>
      </header>
    );
  }
}
