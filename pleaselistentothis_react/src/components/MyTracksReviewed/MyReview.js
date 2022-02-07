import React, {useState, useEffect} from "react";
import { Link, useParams} from "react-router-dom"
import ReactPlayer from 'react-player'


const MyReview = ({ reviewContent, userId, trackId, user }) => {
    

    let { id } = useParams();

    
    const [tracks, setTracks] = useState([])
    const [hideSwitch, setHideSwitch] = useState(true);
    const [reviewedTrack, setReviewedTrack] = useState([])

    const userToken = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        getTracks()
    }, [])

    useEffect(() => {
        getReviewedTrack()
}, [])

    const handleClick = (ev) => { setHideSwitch(false) }

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
    
    console.log(reviewedTrack)


  return(
      <>
          <div>
              
            <h1> Your reviewers for {reviewedTrack}!</h1>

              <h2>{user}</h2>
              {/* <h2 hidden={hideSwitch}> {reviewContent}</h2> */}
              <Link to={`/review/${userId}`}>
                Pick one of their tracks to review!
              </Link>

              </div>
   </>
  )

}

export default MyReview;