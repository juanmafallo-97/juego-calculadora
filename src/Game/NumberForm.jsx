import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { isCorrectAnswer } from './gameFunctions';

export default function NumberForm({ onCorrectAnswer, onIncorrectAnswer }) {
  const [answer, setAnswer] = useState('');
  const operation = useSelector((state) => state.operation);

  const onChange = (event) => {
    const value = event.target.value;
    setAnswer(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(answer, operation.result);
    if (isCorrectAnswer(operation, answer)) onCorrectAnswer();
    else onIncorrectAnswer();
    setAnswer('');
  };

  return (
    <div className="game-form-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="number"></label>
        <input type="number" name="number" onChange={onChange} value={answer} />
        <button type="submit">Verificar!</button>
      </form>
    </div>
  );
}
