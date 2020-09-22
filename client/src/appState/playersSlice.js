import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from '@reduxjs/toolkit';

import { LOAD_STATUSES } from '../constants';

const playersAdapter = createEntityAdapter({
  selectId: (player) => player.id,
});

export const fetchPlayers = createAsyncThunk('fetchPlayers', async () => {
  const response = await fetch('http://localhost:3001/players', {
    headers: {
      Accept: 'application/json',
    },
  });
  const playerData = await response.json();
  return playerData;
});

const playersSlice = createSlice({
  name: 'players',
  initialState: playersAdapter.getInitialState({
    loadStatus: LOAD_STATUSES.Idle,
  }),
  reducers: {},
  extraReducers: {
    [fetchPlayers.pending]: (state) => {
      state.loadStatus = LOAD_STATUSES.Loading;
    },
    [fetchPlayers.fulfilled]: (state, { payload }) => {
      state.loadStatus = LOAD_STATUSES.Success;
      playersAdapter.upsertMany(state, payload.players);
    },
    [fetchPlayers.rejected]: (state) => {
      state.loadStatus = LOAD_STATUSES.Error;
      state.error = 'Unable to retrieve players. Please try again.';
    },
  },
});

export const {
  selectById: getPlayerById,
  selectAll: getPlayers,
} = playersAdapter.getSelectors((state) => state.players);

export default playersSlice.reducer;
