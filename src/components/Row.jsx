import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const likeHandler = () => {
    setLike(true);
  };

  const unLikeHandler = () => {
    setLike(false);
  };
  return (
    <>
      <h2 className="text-white md:text-xl capitalize font-bold px-4 md:px-8">
        {title}
      </h2>
      <div className="flex items-center relative group ">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 absolute hidden group-hover:block left-0"
        />
        <div
          id={"slider" + rowId}
          className="overflow-x-scroll w-full h-full whitespace-nowrap scroll-smooth scrollbar-hide relative "
        >
          {movies.map((item, id) => {
            return (
              <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                  alt={item?.title}
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/60 transition-all opacity-0 hover:opacity-100 text-white delay-75 flex items-center justify-center">
                  <p className=" whitespace-normal text-center text-sm md:text-base font-bold ">
                    {item?.title}
                  </p>
                  <p>
                    {like ? (
                      <FaHeart
                        onClick={unLikeHandler}
                        className="absolute top-4 left-4 text-gray-300"
                      />
                    ) : (
                      <FaRegHeart
                        onClick={likeHandler}
                        className="absolute top-4 left-4 text-gray-300"
                      />
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 absolute hidden group-hover:block right-0"
        />
      </div>
    </>
  );
};

export default Row;
