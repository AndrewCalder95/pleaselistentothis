import { Link, useParams, useLocation } from "react-router-dom"
import TrackService from "../../services/trackService";
import React, { useState, useEffect } from "react";
import ReviewableTracksList from "./ReviewableTracksList";


const ReviewPage = ({id, reviewContent, handleReviewDone}) => {

    const [tracks, setTracks] = useState([])
    const [currentUserId, setCurrentUserId] = useState("")
    const [displayMessage, setDisplayMessage] = useState(true);

    const userToken = JSON.parse(localStorage.getItem('user'));

    const userId = TrackService.getCurrentUserById().then((user) => {
        setCurrentUserId(user.id)
    });

    useEffect(() => {
        getTracks()
    }, [currentUserId])

    useEffect(() => {
        checkForContent()
    }, [tracks])
    



    const getTracks = function () {
        fetch(`http://localhost:8080/track/discover/${id}/${currentUserId}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + userToken.accessToken,
            },
        })
            .then(res => res.json())
            .then(tracks => setTracks(tracks))
        
    }
    console.log(tracks.length)

    const checkForContent = function () {
        if (tracks.length == 0) {
            setDisplayMessage(false)
        }
        else {
            setDisplayMessage(true)
        }
      }
        
    return (

            <>
            <div>
                <h4 hidden={displayMessage}> This user doesn't have any tracks to review at the moment!! Please check back later! </h4> 
            </div>
                <ReviewableTracksList tracks={tracks} reviewContent={reviewContent} handleReviewDone={handleReviewDone}/>
            </>
        )
    
}

export default ReviewPage;