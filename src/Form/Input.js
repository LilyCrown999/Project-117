import React from "react";
import { InputField } from "./Inputfield";
import { Select } from "./Select";

export const Input = (props) => {
  return (
    <>
      {props.type === "select" ? (
        <Select {...props} />
      ) : (
        <InputField {...props} />
      )}
    </>
  );
};
