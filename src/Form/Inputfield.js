import React from "react";

export const InputField = ({
  key,
  label,
  name,
  type,
  placeholder,
  handleChange,
  className,
  value
}) => {
  return (
    <p>
      <label>{label}</label>
      <input
        name={name}
        key={key}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className={className}
      ></input>
    </p>
  );
};