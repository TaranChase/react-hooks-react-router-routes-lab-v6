import { Link } from "react-router-dom";

function MovieCard({ id, title }) {
  return (
    <div className="movie-card">
      <h3>{title}</h3>
      <Link to={`/movie/${id}`}>View Movie</Link>
    </div>
  );
}

export default MovieCard;
