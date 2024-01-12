const getGif = async (categoty) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=eJCaxZh8Jvnsoph7EqQCx11C0YAVKJ6I&q=${categoty}&limit=20`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    console.log(gifs)
    return gifs;
};
export default getGif;