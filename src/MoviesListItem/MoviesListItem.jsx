import { Link, useLocation } from "react-router-dom";

export default function MoviesListItem({ id, poster_path, title, release_date, keyWord }) {
    const location = useLocation();
    const urlImages = 'https://image.tmdb.org/t/p/w500';
    return (
        <Link to={{
            pathname: `/movies/${id}`,
            state: {
                from: location.pathname,
                search:location.search,
            }
    }} >
            <li className="movies-list-item" >
                <img src={urlImages + poster_path} alt="" />
                <p>{title}</p> <span>{release_date}</span>
            </li>
        </Link>
    )
};
