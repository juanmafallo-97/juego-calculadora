import React from "react";
import { useSelector } from "react-redux";

export default function DisplayOperation() {
  const currentOperation = useSelector((state) => state.operation);
  const { numA, numB, operation } = currentOperation;
  return <div>{currentOperation ? `${numA} ${operation} ${numB} ?` : ""}</div>;
}
