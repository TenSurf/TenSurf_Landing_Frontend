import React from 'react';
import LoadingWrapper from './styles';
import { CircularProgress, type CircularProgressProps } from '@mui/material';

const Loading: React.FC<CircularProgressProps> = props => {
  return (
    <LoadingWrapper className='loading-wrapper'>
      <CircularProgress {...props} />
    </LoadingWrapper>
  );
};

export default Loading;
