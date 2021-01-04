import { useEffect, useState } from "react";
import styles from './Cast.module.scss';

export default function Cast({id}) {
    const key = 'fa66142a379ae8488ea37ebbe65d511c';
    const urlImages = 'https://image.tmdb.org/t/p/w500';
    const [actorList, setActorList] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`).then(res => res.json()).then(obj => setActorList(obj.cast))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <ul className={styles.listBox}>
            {actorList.map(({id, profile_path, original_name, character }) => {
                return (
                    <li key={id}>
                        <img src={urlImages+profile_path} alt={original_name} />
                        <p>{original_name}</p>
                        <p>{character}</p>
                    </li>
                )
            })}
       </ul>
    )
};
