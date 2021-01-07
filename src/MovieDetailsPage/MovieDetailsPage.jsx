import { useEffect, useState,lazy,Suspense } from "react";
import { NavLink, Route, useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom"
import Loader from "react-loader-spinner";
import { BiArrowBack } from "react-icons/bi";
import ApiDetailsMovies from "../Services/ApiDetailsMovies";

const Cast = lazy(() => import('../Cast/Cast' /*webpackChunkName:"Cast"*/));
const Reviews = lazy(() => import('../Reviews/Reviews' /*webpackChunkName:"Reviews"*/));

export default function MovieDetailsPage() {
    const history = useHistory();
    const location = useLocation();
    const { movieId } = useParams();
    const {url} = useRouteMatch();
    const urlImages = 'https://image.tmdb.org/t/p/w500';
    const [cardMovie, setCardMovie]=useState({})

    useEffect(() => {
        ApiDetailsMovies(movieId).then(obj => setCardMovie(obj))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const { poster_path, title, vote_average, overview, genres } = cardMovie;
    console.log(location);
    return (
        <div>
            <button type="button" onClick={()=>{history.push(location?.state?.from ?? "/")}} className="batton-go-back"><BiArrowBack className="svg-arrow" /> Go back</button>
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
                <div className="details-movies-box">
                    <h4>Additional information</h4>
                <ul className="cast-reviews-list">
                        <li><NavLink to={{
                            pathname: `${url}/cast`,
                            state: {
                                from: location.state.from + location.state.search ?? "",
                                search:location.search,
                            },
                    }}>Cast</NavLink></li>
                    <li><NavLink to={{
                            pathname: `${url}/reviews`,
                            state: {
                                from: location.state.from + location.state.search ?? "",
                                search:location.search,
                            },
                    }}>Reviews</NavLink></li>
                </ul>
                    <Suspense fallback={<Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    />}>
                        <Route path={`${url}/cast`}>
                            <Cast id={movieId} />
                        </Route>
                        <Route path={`${url}/reviews`}>
                            <Reviews id={movieId} />
                        </Route>
                    </Suspense>
            </div>
        </div>

        </div>
    )
};

