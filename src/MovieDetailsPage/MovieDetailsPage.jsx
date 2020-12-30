import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export default function MovieDetailsPage() {
    const { movieId } = useParams();
        const key = 'fa66142a379ae8488ea37ebbe65d511c';
    const urlImages = 'https://image.tmdb.org/t/p/w500';
    const [cardMovie, setCardMovie]=useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`).then(res => res.json()).then(obj => setCardMovie(obj))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const { poster_path, title, vote_average, overview, genres } = cardMovie;
    return (
        <div className="card-movie">
            <img src={urlImages + poster_path} alt="" />
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
                    <Link to="/movies/cast"><li>Cast</li></Link>
                    <Link to="/movies/reviews"><li>Reviews</li></Link>
                </ul></div>
        </div>
    )
};
