import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

import './Navbar.css';

const Navbar = () => {
    const [director, setDirector] = useState('');
    const [gender, setGender] = useState('');
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const queryParams = [];

        if (search) {
            queryParams.push(`q=${search}`);
        }

        if (director) {
            queryParams.push(`director=${director}`);
        }

        if (gender) {
            queryParams.push(`gender=${gender}`);
        }

        const queryString = queryParams.join('&');
        navigate(`/search?${queryString}`);
    };

    return (
        <nav id='navbar'>
            <h2>
                <Link to='/'>
                    <BiCameraMovie /> MovieMania
                </Link>
            </h2>
            <form onSubmit={handleFormSubmit} className="search-form">
                <input 
                    type='text' 
                    placeholder='Busque um filme' 
                    onChange={(e) => setSearch(e.target.value)} 
                    value={search}
                />
                <input 
                    type='text'
                    placeholder='Diretor' 
                    onChange={(e) => setDirector(e.target.value)} 
                    value={director}
                />
                <select
                    onChange={(e) => setGender(e.target.value)}
                    value={gender}
                >
                    <option value=''>Selecione um gênero</option>
                    <option value='Action'>Ação</option>
                    <option value='Comedy'>Comédia</option>
                    <option value='Drama'>Drama</option>
                    <option value='Fantasy'>Fantasia</option>
                    <option value='Horror'>Terror</option>
                </select>
                <button type='submit'>
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    );
};

export default Navbar;
