import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ApiReviews from "../Services/ApiReviews";

export default function Reviews({ id }) {
    const location = useLocation();
    const [reviewsList, setReviewsList] = useState([]);
    console.log(location);
    useEffect(() => {
        ApiReviews(id).then(obj => setReviewsList(obj.results))
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
