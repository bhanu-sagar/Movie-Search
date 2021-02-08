import React from 'react'
import { BACK, MOVIE_DETAILS, NEXT } from './helperFile';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function MovieDetails(props) {
    const movieDetails = (props?.location?.state?.movie);

    const handleFooter = (pathName, buttonName) => {
        return (
            <Link to={{ pathname: pathName }}  >
                <Button variant="contained" color="primary">{buttonName}</Button>
            </Link>
        )
    }

    const primaryMovieDetails = (key) => {
        return (
            <tr>
                <td>
                    <span className="sub_content">
                        <p className="card_list_title">{`${key}` + ':'}</p>
                        <p className="card_cell_details">{`${movieDetails[key][0].Value}`}</p>
                    </span>
                </td>
            </tr>
        )
    }

    const secondaryMovieDetails = (key) => {
        return (
            <tr>
                <td>
                    <span className="sub_content">
                        <p className="card_list_title">{`${key}` + ':'}</p>
                        <p className="card_cell_details">{`${movieDetails[key]}`}</p>
                    </span>
                </td>
            </tr>
        )
    }

    return (
        <div className='card_main_container'>
            <table id="t01">
                <tr>
                    <th className="movie_details">{MOVIE_DETAILS}</th>
                </tr>
                {Object.keys(movieDetails).map((key) => {
                    return (
                        Array.isArray(movieDetails[key])) ? primaryMovieDetails(key) : secondaryMovieDetails(key)

                })}
            </table>
            <span className='movie_details_footer'>
                {handleFooter('/', BACK)}
                {handleFooter('/card-details', NEXT)}
            </span>
        </div>
    )
}

export default MovieDetails;
