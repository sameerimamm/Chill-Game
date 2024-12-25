import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Correct import

const App = () => {
  return (
    <div className="app">
      <BrowserRouter> {/* Correct component name */}
        <Navbar />
        <Routes>
          <Route path="/popular" element={<MovieList type={"popular"} title={"Popular"} />} /> {/* Correct Route usage */}
          <Route path="/top_rated" element={<MovieList type={"top_rated"} title={"Top Rated"} />} />
          <Route path="/upcoming" element={<MovieList type={"upcoming"} title={"Upcoming"} />} />
          {/* Add a default route or redirect if needed */}
          <Route path="/" element={<MovieList type={"popular"} title={"Popular"} />} /> Example default route
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;