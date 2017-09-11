import React from "react";

import TopNav from "./top-nav";

import "./header.css";

export default function Header(props) {
  return (
    <header>
      <TopNav
        onGenerateAuralUpdate={props.onGenerateAuralUpdate}
        onNewGame={props.onNewGame}
      />
      <h1>HOT or COLD</h1>
    </header>
  );
}
