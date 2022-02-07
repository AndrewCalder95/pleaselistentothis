import MyReview from "./MyReview";
import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom'

const ReviewList = ({ reviews }) => {



    const userToken = JSON.parse(localStorage.getItem('user'));


    
    let { id } = useParams();

    console.log(id)
     
 const filteredNodes = reviews.map(review => {
     return (
          <MyReview reviewContent={review.reviewContent} user={review.user.artistName} userId={review.user.id} trackId={review.id} name = {review.name}></MyReview>
     )
 });
    
    
    return (
        <>
            {/* <h1> Your reviewers for {review.track}!</h1> */}
            {filteredNodes}
        </>
    )

}


export default ReviewList
