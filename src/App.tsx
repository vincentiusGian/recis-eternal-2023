import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/AboutPage';

import './App.css';


function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/About' Component={About} />
        </Routes>
      </div>

    </>
  )




};

export default App;
