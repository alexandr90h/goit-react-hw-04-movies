import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ApiCast from "../Services/ApiCast";
import styles from './Cast.module.scss';

export default function Cast({ id }) {
    const location = useLocation();
    const urlImages = 'https://image.tmdb.org/t/p/w500';
    const [actorList, setActorList] = useState([]);
    console.log(location);
    useEffect(() => {
       ApiCast(id).then(obj => setActorList(obj.cast))
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
