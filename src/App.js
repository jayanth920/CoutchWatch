import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/Header/Header'
import Home  from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="movie/:id" element={<h1> Movie Detail Page</h1>}></Route>
          <Route path="movies/:type" element={<h1> Movies List Page</h1>}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
