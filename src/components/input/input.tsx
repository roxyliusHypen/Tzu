import React, { useState } from "react";
import "./input.css";
import { inputProps } from "./input.types";

/**
 * This methods 
 * @param props 
 * @returns 
 */
const Input: React.FC<inputProps> = (props) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const [rating, setRating] = useState(0);
  return (
    <button></button>
  );
};

export default Input;