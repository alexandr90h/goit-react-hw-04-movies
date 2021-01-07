import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useHistory, useLocation } from "react-router-dom";
import MoviesListItem from "../MoviesListItem/MoviesListItem";
import ApiSearchMovies from "../Services/ApiSearchMovies";

export default function MoviesPage() {
    const history = useHistory();
    const location = useLocation();

    const [keyWord, setKeyWord] = useState(new URLSearchParams(location.search).get('searchBy') ?? '');
    const [searchFilm, setSearchFilm] = useState([]);

    const onSubHendSearch = e => {
        e.preventDefault();
        history.push({ ...location, search: `searchBy=${e.target.keyWord.value}` });
        setKeyWord(e.target.keyWord.value);
    }
    useEffect(() => {
        if (keyWord==='') {
            return
        }
        ApiSearchMovies(keyWord).then(({results})=>setSearchFilm(results))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyWord])
    return (
    <div className="movies-page">
        <form onSubmit={onSubHendSearch} className="form-on-search">
            <input type="text" autoComplete="off" name="keyWord" autoFocus placeholder="Search movies"/>
            <button type="submit"><BiSearch className="svg-search" /></button>
            </form>
            {keyWord!=='' && <ul className="movies-list">
            {searchFilm.map(({ id, poster_path, title, release_date }) => {
                return (
                    <MoviesListItem id={id} poster_path={poster_path} title={title} release_date={release_date} key={id} keyWord={keyWord}/>
                )
            })}
        </ul>}
    </div>
    )
};
