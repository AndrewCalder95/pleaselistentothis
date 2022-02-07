import React, {useState, useEffect} from "react";
import ReviewList from "../MyTracksReviewed/MyReviewList";
// import CommentForm from "../components/CommentForm";
import TrackService from "../../services/trackService";
import { useParams } from 'react-router-dom'

const View = () => {

    const [reviews, setReviews] = useState([]);
    let { id } = useParams();

    const userToken = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        getReviewsByTrackId()
    }, [])

    console.log("VIEW" + id)


    const getReviewsByTrackId = function () {
        fetch(`http://localhost:8080/reviews/trackid?trackId=${id}`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + userToken.accessToken,
            },
        })
            .then(res => res.json())
            .then(reviews => setReviews(reviews))
    }
    
    console.log(reviews)
    
    return (

        <>
            <ReviewList reviews={reviews} />
    </>
  )



}

export default View