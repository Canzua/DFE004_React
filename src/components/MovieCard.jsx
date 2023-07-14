import { Link} from 'react-router-dom'

import {FaStar} from 'react-icons/fa'

const imageUrl = import.meta.VITE_IMG

const MovieCard = ({movie, showLink = true}) => {
    return (
        <div className='movie-card'>
            <img src={imageUrl + movie.poster.path} alt='' />
            <h2>{movie.title}</h2>
        </div>
    )
}

export default MovieCard