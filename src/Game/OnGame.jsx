import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Timer from "./Timer";
import { generateRandomResult, checkResult } from "./gameFunctions";
import { setOperation } from "../actions";
import DisplayOperation from "./DisplayOperation";
import NumberForm from "./NumberForm";

export default function OnGame() {
  const [time, setTime] = useState(10);
  const [range, setRange] = useState([0, 5]);
  const operation = useSelector((state) => state.operation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOperation(generateRandomResult(range)));

    const timerInterval = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  const checkAnswer = (answer) => {
    if (answer == operation.result) {
    }
  };

  return (
    <div className="ongame-container">
      <Timer time={time} />
      <span>Jugando...</span>
      <DisplayOperation />
      <NumberForm checkAnswer={checkAnswer} />
    </div>
  );
}
