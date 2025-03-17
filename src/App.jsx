import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarHeader from "./components/navbarheader/navbarheader";
import Home from "./components/home/home";
import Login from "./components/login/login";
import NotFound from "./Pages/NotFound/NotFound";
import Movies from "./Pages/Movies/Movies";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Favorites from "./Pages/Favorites/Favorites";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavbarHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;