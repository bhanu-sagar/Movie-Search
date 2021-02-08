import React, { useState } from 'react';
import { TextField, InputLabel, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { TITLE, API_KEY, SEARCH, moviesList, ERROR } from './helperFile';

function Movies() {
    const [movie, setMovie] = useState('');
    const [allMovies, setAllMovies] = useState([]);

    const handleSerach = (ev) => {
        return (
            setMovie(ev.target.value)
        )
    };

    const handleClick = () => {
        return (
            fetch(moviesList + movie + '&apikey=' + API_KEY)
                .then(async response => {
                    const data = await response.json();
                    if (!response.ok) {
                        const error = data;
                        return Promise.reject(error);
                    }
                    setAllMovies(data)
                })
                .catch(error => {
                    console.error(ERROR, error);
                }));
    }

    const handleTextContainer = () => {
        return (
            <div className="sub_container">
                <InputLabel shrink id='count_label'>{TITLE}</InputLabel>
                <TextField id="outlined-basic" variant="outlined" onChange={handleSerach} />
                <Button variant="contained" color="primary" onClick={handleClick} id="button_alignment">{SEARCH}</Button>
            </div>
        )
    }

    const handleImageContainer=()=>{
        return(
            <div className="sub_container">
                {allMovies.Response !== 'False' ?
                    <Link to={{ pathname: '/movie-details', state: { movie: allMovies } }}  >
                        <img src={allMovies.Poster} className="img_styles" />
                    </Link> : <div className="not_found_error">{allMovies.Error}</div>}
            </div>
        )
    }

    return (
        <div className="main_container">
            {handleTextContainer()}
            {handleImageContainer()}
        </div>
    )
}

export default Movies;