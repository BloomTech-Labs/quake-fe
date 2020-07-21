import { useState } from "react";

export const useForm = (initialValue = {}, formSubmitCallback) => {
  const [values, setValues] = useState(initialValue);

  const handleChanges = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formSubmitCallback();
  };

  return [values, handleChanges, handleSubmit];
};
