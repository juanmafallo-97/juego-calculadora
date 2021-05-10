import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetGame } from '../actions';
import OnGame from './OnGame';

export default function MainContainer() {
  const dispatch = useDispatch();
  const [playing, setPlaying] = useState(false);
  return (
    <div className="main-container">
      {playing ? (
        <div>
          <OnGame />
          <button
            onClick={() => {
              dispatch(resetGame());
              setPlaying(false);
            }}
          >
            Volver
          </button>
        </div>
      ) : (
        <button onClick={() => setPlaying(true)}>Jugar!</button>
      )}
    </div>
  );
}
