import { Link } from "react-router-dom";

export default function MoviesListItem({ id, poster_path, title, release_date }) {
        const urlImages = 'https://image.tmdb.org/t/p/w500';
    return (
        <Link to={`/movies/${id}`} >
            <li className="movies-list-item" >
                <img src={urlImages + poster_path} alt="" />
                <p>{title}</p> <span>{release_date}</span>
            </li>
        </Link>
    )
};
