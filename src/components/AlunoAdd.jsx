import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AlunoAdd = () => {
  const baseUrl = "https://localhost:7265/api/alunos/";

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState(0);  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(baseUrl, { nome, email, idade})
      .then(response => {
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="aluno-form">
      <h1>Add Aluno</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <label>
          Idade:
          <input type="number" value={idade} onChange={e => setIdade(parseInt(e.target.value))} required />
        </label>        
        <button type="submit">Add Aluno</button>
      </form>
    </div>
  );
};

export default AlunoAdd;