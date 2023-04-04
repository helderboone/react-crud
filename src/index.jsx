import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AlunoList from './components/AlunoList';
import AlunoAdd from './components/AlunoAdd';
import AlunoEdit from './components/AlunoEdit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<AlunoList/>} />        
        <Route exact path="/add" element={<AlunoAdd/>} />
        <Route exact path="/edit/:id" element={<AlunoEdit/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

