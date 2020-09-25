import { openDialog } from '../../appState/dialogSlice';

export const PLAYER_ACTIONS = {
  Edit: {
    title: 'Edit',
    action: (playerId) =>
      openDialog({
        type: 'EditPlayerDialog',
        props: { playerId },
      }),
  },
  Delete: {
    title: 'Delete',
    action: (playerId) =>
      openDialog({
        type: 'DeletePlayerDialog',
        props: { playerId },
      }),
  },
};
