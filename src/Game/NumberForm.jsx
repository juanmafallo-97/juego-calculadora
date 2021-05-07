import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function NumberForm({ checkAnswer }) {
  const [answer, setAnswer] = useState("");
  const operation = useSelector((state) => state.operation);
  const dispatch = useDispatch();

  const onChange = (event) => {
    const value = event.target.value;
    setAnswer(value);
  };

  const verifyAnswer = () => {
    if (answer == operation.result) console.log("bien!");
    else console.log("mal :(");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(answer);
    checkAnswer(answer);
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
