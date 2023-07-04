import React from 'react';
import { List, ListItem, ListItemButton, Typography } from '@mui/material';

const LeftChild = ({ data, setSelectedId }) => {
  const handleClick = (id) => {
    setSelectedId(id);
  };

  return (
    <List>
      {data.map((item) => (
        <ListItem disablePadding key={item.id}>
          <ListItemButton onClick={() => handleClick(item.id)}>
            <Typography variant="body1">{item.name}</Typography>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default LeftChild;
