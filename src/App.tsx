import React from 'react';
import './assets/App.css';
import jsonData from './assets/etsy.json';
import Listing from './components/Listing';
import { itemsType } from './types/Listing.types';

const App: React.FC = () => {
  const data: itemsType = jsonData;

  return (
    <>
      <Listing items={data} />
    </>
  );
};

export default App;
