import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { fetchPlayers, getPlayers } from '../appState/playersSlice';
import './PlayerTable.scss';

const PlayerTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlayers());
  }, [dispatch]);

  const players = useSelector(getPlayers);

  return (
    <div
      id="player-table-grid"
      role="grid"
      aria-label="Poker Players"
      className="player-table"
    >
      <TableHeader />
      <TableBody players={players} />
    </div>
  );
};

export default PlayerTable;
