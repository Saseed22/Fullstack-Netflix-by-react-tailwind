import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + " ...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full ">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-6">
            <button className="border border-red-600 py-2 px-5 bg-red-600 text-white rounded">
              Play
            </button>
            <button className="border border-gray-300 py-2 px-5 text-white ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-xs py-2">
            Released: {movie?.release_date}
          </p>
          <p className="w-full max-w-[70%] md:max-w-[50%] lg:max-w-[30%] text-gray-200">
            {truncateString(movie?.overview,150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
