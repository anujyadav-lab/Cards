import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const RightChild = ({ selectedId, data }) => {
  const selectedItem = data.find((item) => item.id === selectedId);

  return (
<>
<h1>Card</h1>
    <Card>

      <CardContent>
        <Typography variant="h5" component="div">
          {selectedItem.name}
        </Typography>
        <Typography variant="body1">Price: Rs. {selectedItem.price}</Typography>
      </CardContent>
    </Card>
    </>
  );
};

export default RightChild;
