import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import MovieList from './components/MovieList/MovieList';


function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes> 
            <Route index element={<Home />}></Route>
                
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
