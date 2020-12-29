import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HoumeViews() {
    const key = 'fa66142a379ae8488ea37ebbe65d511c';
    const urlImages = 'https://image.tmdb.org/t/p/w500';
    const [trendFilm, setTrendFilm] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`).then(res => res.json()).then(({ results }) => setTrendFilm(prev=>trendFilm===[]?results:([...prev,...results])));
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <ul className="movies-list">
            {trendFilm.map(({ id, poster_path, title, release_date }) => {
                return (
                    <Link to={`/movies/${id}`} key={id}>            
                    <li className="movies-list-item" >
                            <img src={urlImages + poster_path} alt="" />
                            <p>{title}</p> <span>{release_date}</span>
                        </li>
                    </Link>
                )
            })}
        </ul>
    )
};
