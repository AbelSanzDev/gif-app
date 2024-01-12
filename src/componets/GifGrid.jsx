import { useEffect, useState } from "react";
// import getGif from "../helpers/getGifs";
import GifGridItem from "./GifGridItem";
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({ categoty }) => {
  const { imagenes, isLoading } = useFetchGifs(categoty);

  return (
    <>
      <h3>{categoty}</h3>
      {isLoading && <h3>Cargando</h3>}
      <div className="card-grid">
        {imagenes.map((image) => (
          <GifGridItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
