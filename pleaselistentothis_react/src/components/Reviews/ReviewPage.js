import { Link, useParams, useLocation } from "react-router-dom"
import TrackService from "../../services/trackService";
import React, { useState, useEffect } from "react";
import ReviewableTracksList from "./ReviewableTracksList";


const ReviewPage = ({id, reviewContent, user, setAsViewed}) => {

    const [tracks, setTracks] = useState([])
    const [currentUserId, setCurrentUserId] = useState("")

    const userToken = JSON.parse(localStorage.getItem('user'));

    const userId = TrackService.getCurrentUserById().then((user) => {
        setCurrentUserId(user.id)
    });

    useEffect(() => {
        getTracks()
    }, [currentUserId])



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
        
        return (
            <>
                <ReviewableTracksList tracks={tracks} reviewContent={reviewContent}/>
            </>
        )
    
}

export default ReviewPage;