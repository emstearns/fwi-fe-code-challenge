import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlayers, getPlayers } from '../appState/playersSlice';
import './PlayerTable.scss';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

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
