import { useEffect, useState } from "react";

export default function Reviews({ id }) {
    const key = 'fa66142a379ae8488ea37ebbe65d511c';
    const [reviewsList, setReviewsList] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`).then(res => res.json()).then(obj => setReviewsList(obj.results))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        !reviewsList.length
            ?
            <p>We don't have any reviews for this movie</p>
            :
        <ul>
            {reviewsList.map(({id, author, content }) => {
                return (
                    <li key={id}>
                        <h5>{author}</h5>
                        <p>{content}</p>
                    </li>
                )
            })}
        </ul>
    )
};
