import React from "react";

function BlockItem({ att }) {
  return (
    <div key={att.index}>
      <h2> {att.data}</h2>
      <p> {att.timestamp} </p>
    </div>
  );
}

export default BlockItem;
