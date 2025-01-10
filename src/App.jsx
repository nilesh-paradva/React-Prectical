import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Movie from './components/movieform/Movie';
import MovieList from './pages/MovieList';
import EditMovie from './pages/EditMovie';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addmovie" element={<Movie />} />
          <Route path="/movielist" element={<MovieList />} />
          <Route path="/editmovie" element={<EditMovie />} />
          <Route path="/editmovie/:id" element={<EditMovie />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
