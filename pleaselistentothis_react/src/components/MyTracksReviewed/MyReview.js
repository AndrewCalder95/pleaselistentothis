import React, {useState, useEffect} from "react";
import { Link, useParams} from "react-router-dom"
import ReactPlayer from 'react-player'
import ReviewPage from "../Reviews/ReviewPage";
import ActualReview from "../Reviews/ActualReview";

const MyReview = ({ reviewContent, userId, trackId, user }) => {

    let { id } = useParams();
    const [tracks, setTracks] = useState([])
    const [hideSwitch, setHideSwitch] = useState("");
    const [reviewedTrack, setReviewedTrack] = useState([])
    const [showReviewPage, setShowReviewPage] = useState(true)
    const [showReviewableTracks, setShowReviewableTracks] = useState(false)
    const [alreadyReviewed, setAlreadyReviewed] = useState(true)

    const userToken = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        getTracks()
    }, [])

    useEffect(() => {
        getReviewedTrack()
    }, [])
    
    const handleSeeReviewableTracksClick = (ev) => {
        setShowReviewableTracks(true)
        setHideSwitch(true)
    }

    // const handleAlreadyReviewed = () => {
    //     setAlreadyReviewed(false)
    // }

  

    const getTracks = function () {
        fetch(`http://localhost:8080/tracks/${userId}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + userToken.accessToken,
            },
        })
            .then(res => res.json())
            .then(tracks => setTracks(tracks))
    }

    const getReviewedTrack = function () {
        fetch(`http://localhost:8080/track/reviews/${trackId}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + userToken.accessToken,
            },
        })
            .then(res => res.json())
            .then(reviewedTrack => setReviewedTrack(reviewedTrack[0].name))
    }

  return(
      <>
          
          <div>
              <h2 hidden={hideSwitch} >{user}</h2>
              <a hidden={hideSwitch} onClick={handleSeeReviewableTracksClick}>Click here to pick one of their tracks to review to see what they've said about yours!</a>
              {showReviewableTracks ?
                      <ReviewPage user={user} id={userId} reviewContent={reviewContent}/>
                  : null}
              </div>
          
   </>
  )

}

export default MyReview;