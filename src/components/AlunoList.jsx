import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AlunoList = () => {
  const baseUrl = "https://localhost:7265/api/alunos/";
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    axios.get(baseUrl)
      .then(response => {
        setAlunos(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`${baseUrl}${id}`)
      .then(response => {
        setAlunos(alunos.filter(aluno => aluno.id !== id));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="aluno-list">
      <h1>Aluno List</h1>
      <Link to="/add">Add Aluno</Link>
      <table>
        <thead>
          <tr>
          <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map(aluno => (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.email}</td>
              <td>{aluno.idade}</td>
              <td>
                <Link to={`/edit/${aluno.id}`}>Edit</Link>
              </td>
              <td>
                <button onClick={() => handleDelete(aluno.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlunoList;
