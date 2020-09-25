import React from 'react';
import { useDispatch } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';

import { Button } from '../common/';
import { ReactComponent as CloudColor } from './cloud-color.svg';
import { ReactComponent as CloudEffects } from './cloud-effects.svg';
import { openDialog } from '../appState/dialogSlice';
import './Header.scss';

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
        <Button id="add-player-button" onClick={openAddPlayerDialog}>
          <AddIcon className="button-icon" aria-hidden="true" />
          Add Player
        </Button>
      </div>
    </header>
  );
};

export default Header;
