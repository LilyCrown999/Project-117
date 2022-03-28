import { useState } from "react";
import { Input } from "./Input";

/**
 * Set up event handling, state management and validation
 * for form inputs
 * @param {Array} config - contains attribute information for each input
 */

export const useForm = (config) => {
  //Initialize data object according to configuration
  const initialData = {};
  for (const input of config) {
    initialData[input.name] = "";
  }
  const [data, setData] = useState(initialData);

  //Update data on key change
  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value
    });
  };

  //Create input fields
  const Inputs = config.map((input) => (
    <Input
      key={input.name}
      name={input.name}
      type={input.type}
      label={input.label}
      placeholder={input.placeholder}
      options={input.options}
      value={data[input.name]}
      handleChange={handleChange}
    />
  ));

  return [data, Inputs];
};
