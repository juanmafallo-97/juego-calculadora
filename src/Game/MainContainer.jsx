import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { gameReset } from '../actions';
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
            className="normal-btn"
            onClick={() => {
              dispatch(gameReset());
              setPlaying(false);
            }}
          >
            Volver
          </button>
        </div>
      ) : (
        <>
          <div className="game-description">
            <p>¡Bienvenido/a!</p>
            <p>
              Este es un juego hecho para probar tus conocimientos de
              matemática. Espero que te acuerdes algo de la secundaria...
            </p>
            <p>Ojo que si te va mal le voy a decir a Victor</p>
          </div>
          <button onClick={() => setPlaying(true)} className="play-btn">
            JUGAR!
          </button>
        </>
      )}
    </div>
  );
}
