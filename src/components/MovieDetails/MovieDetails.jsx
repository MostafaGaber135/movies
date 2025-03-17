import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c7558ccb1e92b084efd7b8647dc31771`)
      .then(response => setMovie(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="container my-5">
      <h1>{movie.title}</h1>
      <div className="row">
        <div className="col-md-4">
          <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title}
            className="img-fluid"
          />
        </div>
        <div className="col-md-8">
          <p>{movie.overview}</p>
          <p>Rating: {movie.vote_average}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Runtime: {movie.runtime} minutes</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;