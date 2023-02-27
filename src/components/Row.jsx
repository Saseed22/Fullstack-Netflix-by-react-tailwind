import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";

const Row = ({ title, fetchURL,id }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const sliderLeft = () => {
    const slider = document.getElementById("slider"+id);
    slider.scrollLeft = slider.scrollLeft - 500;
    };
    
    const sliderRight = () => {
        const slider = document.getElementById("slider"+id);
        slider.scrollLeft = slider.scrollLeft + 500;
      };

  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center  group">
        <MdChevronLeft onClick={sliderLeft}
          size={40}
          className="bg-white left-5 top-[35%] rounded-full absolute opacity-40 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider"+id}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie, index) => (
            <Movie movie={movie} key={index} />
          ))}
        </div>
        <MdChevronRight onClick={sliderRight}
          size={40}
          className="bg-white right-5 top-[35%] rounded-full absolute opacity-40 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </div>
  );
};

export default Row;
