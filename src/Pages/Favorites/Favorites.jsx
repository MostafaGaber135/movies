import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


export default function Favorites() {
  const favorites = useSelector((state) => state.fav || []);
  const navigate = useNavigate();

  return (
    <div className="favorites-container">
      <h1 className="text-center mb-4">Your Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-center">No favorites added yet!</p>
      ) : (
        <div className="row g-4  mx-5">
          {favorites.map((movie) => (
            <div className="col-md-4 col-lg-3" key={movie.id}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{movie.title}</Card.Title>
                  <Button
                    variant="primary"
                    className="mt-auto"
                    onClick={() => navigate(`/movie/${movie.id}`)}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}