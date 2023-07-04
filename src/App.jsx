import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import LeftChild from "./LeftChild";
import RightChild from "./RightChild";
import data from "./data";

const App = () => {
  const [selectedId, setSelectedId] = useState(3);

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <LeftChild data={data} setSelectedId={setSelectedId} />
        </Grid>
        <Grid item xs={9}>
          <RightChild selectedId={selectedId} data={data} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
