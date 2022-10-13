import axios from "axios";
import React, { useState, useEffect } from "react";
import request from "../request";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(request.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncateString = (string, num) => {
    if (string?.length > num) {
      return string.slice(0, num) + "...";
    } else {
      return string;
    }
  };

  return (
    <div className="w-full h-[80vh]  text-white">
      <div className="w-full h-full">
        <div className="absolute h-[80vh]  w-full bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover "
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute flex flex-col space-y-4  top-[30%] p-4 md:p-8">
          <h1 className="text-4xl md:text-6xl font-bold"> {movie?.title}</h1>
          <div>
            <button className=" capitalize text-black font-semibold border py-2 px-6 bg-gray-300 cursor-pointer">
              play
            </button>
            <button className="capitalize text-white font-semibold border py-2 px-6 ml-4 cursor-pointer">
              watch later
            </button>
          </div>
          <p className="capitalize font-bold text-gray-400 text-sm">
            released: {movie?.release_date}
          </p>
          <p className=" max-w-3xl text-base md:text-xl ">
            {truncateString(movie?.overview, 190)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
