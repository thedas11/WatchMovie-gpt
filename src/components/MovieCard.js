import React, { useState } from "react";
import { API_Options, MovieCard_URL } from "../utils/constants";
const MovieCard = (props) => {
  const [playTrailer, setPlayTrailer] = useState(null);

  const { posterPath, movieId } = props;

  const handlePlayVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_Options
    );

    const json = await data.json();

    const filterTrailer = json.results.filter(
      (trailer) => trailer?.type === "Trailer"
    );

    const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0]; // handling if can't filter based on Trailer then return the first object from the json

    setPlayTrailer(trailer);
  };

  handleCloseVideo =()=>{

    setPlayTrailer(null)
  }

  if (!playTrailer) {
    return (
      <div className="w-48 cursor-pointer  " onMouseEnter={handlePlayVideo}  >
        <img alt="moviecard" src={MovieCard_URL + posterPath} />
      </div>
    );
  }
 else{
  return (
    <div className="w-48" onMouseLeave={handleCloseVideo}
    >
      <iframe 
        className=" aspect-video w-48 h-[100%]"
        src={
          "https://www.youtube.com/embed/" + playTrailer?.key + "?autoplay=1&mute=1&modestbranding=1&controls=0&showinfo=0"}
        allow="autoplay; picture-in-picture" 
        allowFullScreen
      ></iframe>
    </div>
  );
}
};

export default MovieCard;
