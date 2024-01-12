import React, { useState } from "react";

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState("goku");
  const onInputChange = (e) => {
    setinputValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories((categories) => [...categories, inputValue]);
    onNewCategory(inputValue.trim());
    setinputValue("");
  };
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(e) => onInputChange(e)}
      />
    </form>
  );
};

export default AddCategory;
