import { useEffect, useState } from "react";
import getGif from "../helpers/getGifs";

const useFetchGifs = (categoty) => {
    const [imagenes, setImagenes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getImages = async () => {
        const nuevaImagen = await getGif(categoty);
        setImagenes(nuevaImagen);
        setIsLoading(false)
    };
    useEffect(() => {
        getImages();
    }, []);
    return {
        imagenes: imagenes,
        isLoading
    }
}

export default useFetchGifs