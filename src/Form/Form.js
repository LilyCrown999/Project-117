import React from "react";
import "./Form.css";
import { useForm } from "./useForm";
import { exampleConfig } from "./exampleConfig";

export const Form = () => {
  const [data, Inputs] = useForm(exampleConfig);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Inputs}
      <button className="btn">Submit</button>
    </form>
  );
};