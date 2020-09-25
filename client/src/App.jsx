import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import Header from './Header/Header';
import PlayerTable from './PlayerTable/PlayerTable';
import Dialog from './Dialog/Dialog';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Dialog />
      <Header />
      <PlayerTable />
    </ThemeProvider>
  );
};

export default App;
