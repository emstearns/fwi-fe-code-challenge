import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from '@reduxjs/toolkit';

import { LOAD_STATUSES } from '../constants';

const playersAdapter = createEntityAdapter({
  selectId: (player) => player.id,
});

export const editPlayer = createAsyncThunk('editPlayer', async (playerData) => {
  const response = await fetch(
    `http://localhost:3001/players/${playerData.id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(playerData),
    }
  );
  const data = await response.json();
  return data;
});

export const deletePlayer = createAsyncThunk(
  'deletePlayer',
  async (playerId) => {
    await fetch(`http://localhost:3001/players/${playerId}`, {
      method: 'DELETE',
    });
    return playerId;
  }
);

export const fetchPlayers = createAsyncThunk('fetchPlayers', async () => {
  const response = await fetch('http://localhost:3001/players', {
    headers: {
      Accept: 'application/json',
    },
  });
  const playerData = await response.json();
  return playerData;
});

export const addPlayer = createAsyncThunk('addPlayer', async (playerData) => {
  const response = await fetch('http://localhost:3001/players/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(playerData),
  });
  const json = await response.json();
  return json;
});

const playersSlice = createSlice({
  name: 'players',
  initialState: playersAdapter.getInitialState({
    loadStatus: LOAD_STATUSES.Idle,
  }),
  reducers: {},
  extraReducers: {
    [addPlayer.fulfilled]: (state, { payload }) => {
      playersAdapter.upsertOne(state, payload);
      state.error = null;
    },
    [addPlayer.rejected]: (state) => {
      state.error = 'Failed to add player. Please try again.';
    },
    [fetchPlayers.pending]: (state) => {
      state.loadStatus = LOAD_STATUSES.Loading;
    },
    [fetchPlayers.fulfilled]: (state, { payload }) => {
      state.loadStatus = LOAD_STATUSES.Success;
      playersAdapter.upsertMany(state, payload.players);
      state.error = null;
    },
    [fetchPlayers.rejected]: (state) => {
      state.loadStatus = LOAD_STATUSES.Error;
      state.error = 'Unable to retrieve players. Please try again.';
    },
    [editPlayer.fulfilled]: (state, { payload }) => {
      playersAdapter.upsertOne(state, payload);
      state.error = null;
    },
    [editPlayer.rejected]: (state) => {
      state.error = 'Unable to update player. Please try again.';
    },
    [deletePlayer.fulfilled]: (state, { payload }) => {
      playersAdapter.removeOne(state, payload);
      state.error = null;
    },
    [deletePlayer.rejected]: (state) => {
      state.error = 'Unable to delete player. Please try again.';
    },
  },
});

export const {
  selectById: getPlayerById,
  selectAll: getPlayers,
} = playersAdapter.getSelectors((state) => state.players);

export default playersSlice.reducer;
