import React, {useState, useEffect} from "react";
import { Link, useParams} from "react-router-dom"
import ReactPlayer from 'react-player'
import ReviewPage from "../Reviews/ReviewPage";
import ActualReview from "../Reviews/ActualReview";
import PeopleWhoHaveReviewed from "../Reviews/PeopleWhoHaveReviewed";
import ReviewContent
    from "../Reviews/ReviewContent";
const MyReview = ({ reviewContent, userId, trackId, user }) => {

    let { id } = useParams();
    const [tracks, setTracks] = useState([])
    const [reviewedTrack, setReviewedTrack] = useState([])
    const [showReviewPage, setShowReviewPage] = useState(true)
    const [alreadyReviewed, setAlreadyReviewed] = useState(true)
    const [hideReviewer, setHideReviewer] = useState('')
    const [hideWhenReviewComplete, setHideWhenReviewComplete] = useState(true)
    const [showWhenReviewComplete, setShowWhenReviewComplete] = useState(false)

    const userToken = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        getTracks()
    }, [])

    useEffect(() => {
        getReviewedTrack()
    }, [])
    

    // const handleAlreadyReviewed = () => {
    //     setAlreadyReviewed(false)
    // }

    const handleReviewDone = () => {
        console.log("CALLED WOOOO")
        setHideWhenReviewComplete(false)
        setShowWhenReviewComplete(true)
    }

  

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
              {hideWhenReviewComplete ?
              <PeopleWhoHaveReviewed user = {user} reviewContent={reviewContent} userId={userId} trackId={trackId} user ={user} handleReviewDone = { handleReviewDone }/>
                : null}
              {showWhenReviewComplete ?
                  <ReviewContent user={user} reviewContent={reviewContent} handleReviewDone = { handleReviewDone }/>
                : null}
              {/* <a hidden ={hideSwitch}>{reviewContent}</a> */}
              
              </div>
          
   </>
  )

}

export default MyReview;