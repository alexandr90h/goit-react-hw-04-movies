import { useEffect, useState } from "react";
import MoviesListItem from "../MoviesListItem/MoviesListItem";
import ApiListMovies from "../Services/ApiListMovies";

export default function HoumeViews() {
    const [trendFilm, setTrendFilm] = useState([]);
    useEffect(() => {
        ApiListMovies().then(({ results }) => setTrendFilm(prev=>trendFilm===[]?results:([...prev,...results])));
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <ul className="movies-list">
            {trendFilm.map(({ id, poster_path, title, release_date }) => {
                return (
                    <MoviesListItem id={id} poster_path={poster_path} title={title} release_date={ release_date} key={id}/>
                )
            })}
        </ul>
    )
};
