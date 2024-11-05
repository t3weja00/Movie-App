// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import MovieDetails from './components/MovieDetails'; // Import the MovieDetails component
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Set Home as the default route */}
        <Route path="/movie/:id" element={<MovieDetails />} /> {/* Movie Details page */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
