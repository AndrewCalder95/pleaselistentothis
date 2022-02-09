import React, { useState, useEffect } from "react";
import ReviewPage from "./ReviewPage";

const PeopleWhoHaveReviewed = ({ reviewContent, userId, trackId, user, handleReviewDone }) => {

    const [showReviewableTracks, setShowReviewableTracks] = useState(false)
    const [hideSwitch, setHideSwitch] = useState("");

    const handleSeeReviewableTracksClick = (ev) => {
        setShowReviewableTracks(true)
        setHideSwitch(true)
    }

    
     


    return (
        <>
            <h2>{user}</h2>
            <a hidden ={hideSwitch} onClick  ={handleSeeReviewableTracksClick}>
                Click here to pick one of their tracks to review to see what they've said about yours!
            </a>
            {showReviewableTracks ?
                      <ReviewPage user={user} id={userId} reviewContent={reviewContent} handleReviewDone =  {handleReviewDone}/>
                  : null}
        </>
    )

}


export default PeopleWhoHaveReviewed
