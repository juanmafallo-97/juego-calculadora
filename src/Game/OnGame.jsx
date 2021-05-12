import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Timer from './Timer';
import { generateRandomResult } from './gameFunctions';
import { operationSet, hitAdded, levelAdded, messageSet } from '../actions';
import DisplayOperation from './DisplayOperation';
import NumberForm from './NumberForm';
import Message from './Message';
import StatusDisplay from './StatusDisplay';

export default function OnGame() {
  const [time, setTime] = useState(10);
  const [finishedGame, setFinishedGame] = useState(false);
  const currentLevel = useSelector((state) => state.level);
  const currentHits = useSelector((state) => state.hits);
  const dispatch = useDispatch();
  const timerRef = useRef(null);

  useEffect(() => {
    dispatch(operationSet(generateRandomResult(currentLevel)));
    timerRef.current = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (time === 0) {
      clearInterval(timerRef.current);
      dispatch(messageSet('Se acabó el tiempo!'));
      setFinishedGame(true);
    }
  }, [time, dispatch]);

  const handleCorrectAnswer = () => {
    //El nivel sube cada vez que se hacen 3 respuestas correctas seguidas. Por eso lo siguiente:
    if (currentHits / (currentLevel * 3) === 1) {
      dispatch(levelAdded());
    }
    dispatch(hitAdded());
    setTime(10);
    dispatch(operationSet(generateRandomResult(currentLevel)));
  };

  const handleIncorrectAnswer = () => {
    clearInterval(timerRef.current);
    setFinishedGame(true);
    dispatch(messageSet('Respuesta incorrecta... Perdiste :('));
  };

  return (
    <div className="ongame-container">
      {!finishedGame ? (
        <div>
          <Timer time={time} />
          <div className="game-status">
            <StatusDisplay status="hits" displayText="Aciertos" />
            <StatusDisplay status="level" displayText="Nivel" />
          </div>

          <DisplayOperation />
          <NumberForm
            onCorrectAnswer={handleCorrectAnswer}
            onIncorrectAnswer={handleIncorrectAnswer}
          />
        </div>
      ) : (
        <div className="finished-game-container">
          <Message />
          <p className="finished-status">Aciertos Totales: {currentHits}</p>
          <p className="finished-status">Nivel Alcanzado: {currentLevel}</p>
        </div>
      )}
    </div>
  );
}
