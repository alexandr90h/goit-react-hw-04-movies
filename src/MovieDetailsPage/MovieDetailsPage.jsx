import { useEffect, useState } from "react";
import { NavLink, Route, useParams, useRouteMatch } from "react-router-dom"
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import ApiDetailsMovies from "../Services/ApiDetailsMovies";

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const {url} = useRouteMatch();
    const urlImages = 'https://image.tmdb.org/t/p/w500';
    const [cardMovie, setCardMovie]=useState({})

    useEffect(() => {
        ApiDetailsMovies(movieId).then(obj => setCardMovie(obj))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const { poster_path, title, vote_average, overview, genres } = cardMovie;
    console.log(poster_path);
    return (
        <div className="card-movie">
            <img src={urlImages + poster_path } alt="" />
            <div className="content-card-movie">
                <h1>{title}</h1>
                <p>User Score: {vote_average*10}%</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h3>Genres</h3>
                {genres ? <ul>{genres.map(obj => { return (<li key={obj.id}>{obj.name}</li>) })}</ul> : <p>no genres</p>}
            </div>
            <div className="details-movies-box"><h4>Additional information</h4>
                <ul>
                    <li><NavLink to={`${url}/cast`}>Cast</NavLink></li>
                    <li><NavLink to={`${url}/reviews`}>Reviews</NavLink></li>
                </ul>
            <hr />
            <Route path={`${url}/cast`}>
                    <Cast id={movieId}/>
            </Route>
            <Route path={`${url}/reviews`}>
               <Reviews id={movieId}/> 
                </Route>
            </div>
        </div>
    )
};
