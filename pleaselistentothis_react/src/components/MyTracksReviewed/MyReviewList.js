import MyReview from "./MyReview";
import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom'
import ReviewableTracks from "../Reviews/ReviewableTracks";

const ReviewList = ({ reviews }) => {

    const [showUserTracks, setShowUserTracks] = useState(false)

    const userToken = JSON.parse(localStorage.getItem('user'));

    let { id } = useParams();
     
 const filteredNodes = reviews.map(review => {
     return (
          <MyReview reviewContent={review.reviewContent} user={review.user.artistName} userId={review.user.id} trackId={review.id} name = {review.name}></MyReview>
     )
 });
    
    
    return (
        <>

            {filteredNodes}
        </>
    )

}


export default ReviewList
