import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const AlunoEdit = () => {
    const baseUrl = "https://localhost:7265/api/alunos/";
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState(0);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${baseUrl}${id}`)
            .then(response => {
                setNome(response.data.nome);
                setEmail(response.data.email);
                setIdade(response.data.idade);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`${baseUrl}${id}`, { nome, email, idade })
            .then(response => {
                // navigate(`/${id}`);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="aluno-form">
            <h1>Edit Aluno</h1>
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
                    Year:
                    <input type="number" value={idade} onChange={e => setIdade(parseInt(e.target.value))} required />
                </label>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default AlunoEdit;