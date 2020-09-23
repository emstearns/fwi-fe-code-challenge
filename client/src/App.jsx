import React from 'react';

import Header from './Header/Header';
import PlayerTable from './PlayerTable/PlayerTable';
import Dialog from './Dialog/Dialog';

const App = () => {
  return (
    <>
      <Dialog />
      <Header />
      <PlayerTable />
    </>
  );
};

export default App;
