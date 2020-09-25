import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import ActionsMenu from '../../common/ActionsMenu/ActionsMenu';
import { PLAYER_ACTIONS } from './playerActions';

const PlayerActionsMenu = ({ playerId }) => {
  const dispatch = useDispatch();

  //these will always be the same for every player in this case
  const availableActions = [PLAYER_ACTIONS.Edit, PLAYER_ACTIONS.Delete];

  const actions = availableActions.map(({ title, action }) => ({
    title,
    onClick: () => dispatch(action(playerId)),
  }));

  return <ActionsMenu actions={actions} />;
};

PlayerActionsMenu.propTypes = {
  playerId: PropTypes.string.isRequired,
};

export default PlayerActionsMenu;
