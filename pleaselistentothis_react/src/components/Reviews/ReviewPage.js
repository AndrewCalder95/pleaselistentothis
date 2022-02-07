import { Link, useParams } from "react-router-dom"
import TrackService from "../../services/trackService";
import React, { useState, useEffect } from "react";
import ReviewableTracksList from "./ReviewableTracksList";


const ReviewPage = () => {

    const [tracks, setTracks] = useState([])

    const userToken = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        getTracks()
    }, [])

    let { id } = useParams();

    const getTracks = function () {
        fetch(`http://localhost:8080/tracks/${id}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + userToken.accessToken,
            },
        })
            .then(res => res.json())
            .then(tracks => setTracks(tracks))
        
    }
        
        console.log(tracks)


        return (
            <>
                <ReviewableTracksList tracks = {tracks}/>
            </>
        )
    
}

export default ReviewPage;