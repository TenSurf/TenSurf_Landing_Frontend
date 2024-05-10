import React from 'react';
import Wrapper from './styles';
import { type PaperProps } from '@mui/material';

const Paper: React.FC<PaperProps> = props => {
  return (
    <Wrapper elevation={0} {...props}>
      {props.children}
    </Wrapper>
  );
};

export default Paper;
