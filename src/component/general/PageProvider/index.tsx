import React from 'react';
import Head from 'next/head';
import type IPageDataProviderProps from './types';

const PageProvider: React.FC<IPageDataProviderProps> = props => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      {props.children}
    </>
  );
};

export default PageProvider;
