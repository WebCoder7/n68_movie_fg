import React from "react";
import { useNavigate } from "react-router";
import './Card.css'; 

function Render({ data = [] }) {
  const navigate = useNavigate();
  
  return (
    <div className="render-container">
      <h3 className="render-title">На неделе</h3>
      <div className="movie-list">
        {data.map((movie) => (
          <div
            onClick={() => navigate(`/${movie.id}`)}
            key={movie.id}
            className="movie-card group"
          >
            <div className="movie-image">
              <img
                src={movie.img}
                alt={`Poster of ${movie.title}`} 
              />
            </div>
            <h4 className="movie-title group-hover:font-extrabold transition-all duration-200 ease-in-out">
              {movie.title}
            </h4>
            <p className="movie-genre group-hover:text-white transition-all duration-200 ease-in-out">
              Комедия, Фэнтези
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Render;
