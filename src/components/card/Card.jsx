
import './Card.css';


function Card({ data = [] }) {
  return (
    <div className="card-container">
      <h3 className="card-title">На неделе</h3>


      <div className="card-grid">
        {data.map((movie, i) => (
          <div key={i} className="card-item ">
            <div className="card-image-container">
              <img className="card-image" src={movie.image} alt={movie.title} />
            </div>
            <h4 className="card-movie-title">
              {movie.title}

            </h4>

            <p className="card-genre">
            </p>
          </div>

        ))}
      </div>

    </div>
  );
}

export default Card;
