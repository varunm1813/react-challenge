import React from "react";

import { Grid } from "@material-ui/core";

import BlockItem from "./BlockItem";

function Blocks({ blocks }) {
  if (blocks != undefined) {
    return (
      <div>
        {blocks.map((item) => (
          <Grid>
            <div key={item.id}>
              <h1> {item.id} </h1>
              <BlockItem att={item.attributes}> </BlockItem>
            </div>
          </Grid>
        ))}
      </div>
    );
  } else {
    return <div> NO BLOCKS </div>;
  }
}

export default Blocks;
