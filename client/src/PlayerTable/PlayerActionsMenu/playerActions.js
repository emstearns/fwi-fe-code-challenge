import { openDialog } from '../../appState/dialogSlice';

export const PLAYER_ACTIONS = {
  Edit: {
    title: 'Edit',
    onClick: (playerId) =>
      openDialog({
        type: 'EditPlayerDialog',
        props: { playerId },
      }),
  },
  Delete: {
    title: 'Delete',
    onClick: (playerId) =>
      openDialog({
        type: 'DeletePlayerDialog',
        props: { playerId },
      }),
  },
};
