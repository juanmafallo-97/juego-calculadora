import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Timer from './Timer';
import { generateRandomResult } from './gameFunctions';
import {
  setOperation,
  addHit,
  addLevel,
  setMessage,
  resetGame,
} from '../actions';
import DisplayOperation from './DisplayOperation';
import NumberForm from './NumberForm';
import Message from './Message';

export default function OnGame() {
  const [time, setTime] = useState(10);
  const [range, setRange] = useState([0, 5]);
  const [finishedGame, setFinishedGame] = useState(false);
  const currentLevel = useSelector((state) => state.level);
  const currentHits = useSelector((state) => state.hits);
  const dispatch = useDispatch();

  let timerInterval;

  useEffect(() => {
    dispatch(setOperation(generateRandomResult(range)));
    timerInterval = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  useEffect(() => {
    if (time === 0) {
      clearInterval(timerInterval);
      dispatch(setMessage('Se acabó el tiempo!'));
      setFinishedGame(true);
      console.log(time);
    }
  });

  const handleCorrectAnswer = () => {
    dispatch(addHit());
    setTime(10);
    dispatch(setOperation(generateRandomResult(range)));
    dispatch(setMessage('Bien! Se ha generado otra operación'));
  };

  const handleIncorrectAnswer = () => {
    clearInterval(timerInterval);
    setFinishedGame(true);
    dispatch(setMessage('Respuesta incorrecta... Perdiste :('));
  };

  const playAgain = () => {
    dispatch(resetGame());
  };

  return (
    <div className="ongame-container">
      {!finishedGame ? (
        <div>
          <Timer time={time} />
          <span>Aciertos: {currentHits}</span>
          <DisplayOperation />
          <NumberForm
            onCorrectAnswer={handleCorrectAnswer}
            onIncorrectAnswer={handleIncorrectAnswer}
          />
        </div>
      ) : (
        <div>
          <h3>Aciertos totales: {currentHits}</h3>
        </div>
      )}

      <Message />
    </div>
  );
}
