import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setTheList } from "../../store/slices/fav";
import { StarFill } from 'react-bootstrap-icons';
import "./Movies.css";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const fav = useSelector((state) => state.fav || []);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=c7558ccb1e92b084efd7b8647dc31771`
      )
      .then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleDetails = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  const addToFav = (movie) => {
    const exists = fav.some(item => item.id === movie.id);
    const updatedFav = exists 
      ? fav.filter(item => item.id !== movie.id)
      : [...fav, movie];
    dispatch(setTheList(updatedFav));
  };

  if (loading) return <div className="text-center my-5">Loading movies...</div>;
  if (error) return <div className="text-center my-5 text-danger">Error: {error}</div>;

  return (
    <div className="container my-5">
      <h2 className="mb-4">Popular Movies</h2>
      <Row xs={1} md={3} lg={4} className="g-4">
        {movies.map((movie) => {
          const isFavorite = fav.some(item => item.id === movie.id);
          return (
            <Col key={movie.id}>
              <Card className="h-100 shadow-sm card-hover">
                <Card.Img
                  variant="top"
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                  }
                  alt={movie.title}
                  className="card-img-top"
                />
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start">
                    <Card.Title className="mb-3">{movie.title}</Card.Title>
                    <IoIosHeart
                      onClick={() => addToFav(movie)}
                      className="cursor-pointer"
                      color={isFavorite ? "red" : "gray"}
                      size={35}
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <small className="text-muted">
                      {new Date(movie.release_date).getFullYear() || "N/A"}
                    </small>
                    <div className="d-flex align-items-center">
                      <StarFill className="text-warning me-1" />
                      <span>{movie.vote_average?.toFixed(1) || "N/A"}</span>
                    </div>
                  </div>
                  <Card.Text className="flex-grow-1 movie-overview">
                    {movie.overview || "No description available"}
                  </Card.Text>
                  <Button
                    variant="primary"
                    className="mt-3"
                    onClick={() => handleDetails(movie.id)}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Movies;