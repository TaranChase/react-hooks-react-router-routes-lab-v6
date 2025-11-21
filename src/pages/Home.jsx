import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then(r => r.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>

      {movies.map(movie => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <Link to={`/movie/${movie.id}`}>View Info</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
