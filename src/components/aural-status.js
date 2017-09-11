import React from "react";

export default function AuralStatus(props) {
  return (
    <div 
      id="status-readout"
      className="visuallyhidden"
      aria-live="assertive"
      aria-atomic="true"
    >
      <p> {props.statusText}</p>
    </div>
  );
}