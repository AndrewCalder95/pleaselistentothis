import React, {useState, useEffect} from "react";
import ReviewList from "../MyTracksReviewed/MyReviewList";
// import CommentForm from "../components/CommentForm";
import TrackService from "../../services/trackService";
import { useParams } from 'react-router-dom'

const View = () => {

    const [reviews, setReviews] = useState([]);
    const [displayMessage, setDisplayMessage] = useState(true);

    let { id } = useParams();

    const userToken = JSON.parse(localStorage.getItem('user'));


    useEffect(() => {
        getReviewsByTrackId()
    }, [])

    useEffect(() => {
        checkForContent()
    }, [reviews])


    const checkForContent = function () {
        if (reviews.length == 0) {
            setDisplayMessage(false)
        }
        else {
            setDisplayMessage(true)
        }
      }

   

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

 
        
     



    return (

        <>
            <div id="notrackmessage">
        <h2 hidden={displayMessage}> <i class="far fa-frown fa-2x"></i></h2>
        <h2 hidden={displayMessage}> This track hasn't been reviewed yet!! </h2>
        <h2 hidden={displayMessage}> Please check back later! </h2>
      </div>
            <ReviewList reviews={reviews} />
    </>
  )



}

export default View