import React,{useState, useEffect} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch"

function GifListContainer(){
    const [gifs, setGifs]=useState([]);
    const [query, setQuery]=useState("dolphins");

    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=gnuDyIFM3SJQ9pN4f54n70xnoNrRnbp4&rating=g`)
        .then((response)=>response.json())
        .then(({data})=>{
            const gifs=data.map((gif)=>({
                url:gif.images.original.url}));
            setGifs(gifs);
        });

    },[query]);

    return(
        <div style={{display:"flex"}}>
            <GifList gifs={gifs}/>
            <GifSearch onSubmitQuery={setQuery}/>
        </div>
    );

}

export default GifListContainer;