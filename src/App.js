import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import MovieList from './components/MovieList/MovieList';
import Movie from './Pages/MovieDetail/MovieDetail';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
            <Route path="*/" element={<Home />}></Route>
            <Route path="movie/:id" element={<Movie />}></Route>
            <Route path="movies/:type" element={<MovieList />}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
