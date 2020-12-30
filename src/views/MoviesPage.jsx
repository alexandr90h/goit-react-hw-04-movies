import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import MoviesListItem from "../MoviesListItem/MoviesListItem";

export default function MoviesPage() {
    const key = 'fa66142a379ae8488ea37ebbe65d511c';

    const [keyWord, setKeyWord] = useState('');
    const [searchFilm, setSearchFilm] = useState([]);

    const onSubHendSearch = e => {
        e.preventDefault();
        setKeyWord(e.target.keyWord.value);
    }
    useEffect(() => {
        if (keyWord==='') {
            return
        }
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${keyWord}`).then(res=>res.json()).then(({results})=>setSearchFilm(prev=>searchFilm===[]?results:([...prev,...results])))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyWord])
    return (
    <div>
        <form onSubmit={onSubHendSearch}>
            <input type="text" autoComplete="off" name="keyWord" autoFocus placeholder="Search movies"/>
            <button type="submit"><span><BiSearch /></span></button>
            </form>
            {keyWord!=='' && <ul className="movies-list">
            {searchFilm.map(({ id, poster_path, title, release_date }) => {
                return (
                    <MoviesListItem id={id} poster_path={poster_path} title={title} release_date={ release_date} key={id}/>
                )
            })}
        </ul>}
    </div>
    )
};
