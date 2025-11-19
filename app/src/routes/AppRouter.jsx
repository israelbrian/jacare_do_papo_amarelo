// src/routes/AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Home from '../pages/Home';
import Book from '../pages/Book';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
