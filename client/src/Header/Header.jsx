import React from 'react';
import { useDispatch } from 'react-redux';
import { openDialog } from '../appState/dialogSlice';
import './Header.scss';

import { Button } from '@material-ui/core';
import { ReactComponent as CloudColor } from './cloud-color.svg';
import { ReactComponent as CloudEffects } from './cloud-effects.svg';

const Header = () => {
  const dispatch = useDispatch();
  const openAddPlayerDialog = () =>
    dispatch(
      openDialog({
        type: 'AddPlayerDialog',
      })
    );

  return (
    <header id="main-header" className="header">
      <div className="header__left">
        <div className="logo">
          <CloudColor className="logo__color" />
          <CloudEffects className="logo__effects" />
        </div>
        <h1 className="header__title">FWI Poker Challenge</h1>
      </div>
      <div className="header__right">
        <Button
          className="add-player-button"
          aria-label="Add Player"
          variant="outlined"
          onClick={openAddPlayerDialog}
        >
          + Add Player
        </Button>
      </div>
    </header>
  );
};

export default Header;
