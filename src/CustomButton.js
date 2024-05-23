// src/CustomButton.js
import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ url, text }) => {
  return (
    <Button
      size="small"
      variant="contained"
      color="primary"
      onClick={() => window.location.href = url}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
