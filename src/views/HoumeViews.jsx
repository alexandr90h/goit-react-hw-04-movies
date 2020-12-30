import { useEffect, useState } from "react";
import MoviesListItem from "../MoviesListItem/MoviesListItem";

export default function HoumeViews() {
    const key = 'fa66142a379ae8488ea37ebbe65d511c';
    const [trendFilm, setTrendFilm] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`).then(res => res.json()).then(({ results }) => setTrendFilm(prev=>trendFilm===[]?results:([...prev,...results])));
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
