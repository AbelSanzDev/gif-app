import { useState } from "react";
import AddCategory from "./componets/AddCategory";
import GifGrid from "./componets/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Goku"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {/**Listado de gif */}

      {categories.map((category) => (
        <GifGrid key={category} categoty={category} />
      ))}

      {/**Gif item */}
    </>
  );
};

export default GifExpertApp;
