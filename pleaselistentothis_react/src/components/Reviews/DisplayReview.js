import React, {useState, useEffect} from "react";
import { Link, useParams} from "react-router-dom"
import ReactPlayer from 'react-player'


const DisplayReview = ({ reviewContent, userId, trackId, user }) => {

    let { id } = useParams();

    
    const [tracks, setTracks] = useState([])
    const [hideSwitch, setHideSwitch] = useState(true);
    const [review, setReview] = useState({reviewContent})

    const userToken = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        getTracks()
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

    console.log(review)

  return(
      <>
          <div>
              <button onClick={handleClick}></button>
              <h2>{user}</h2>
          <h2 hidden={hideSwitch}> {reviewContent}</h2>
      {/* <Link to={`/review/${userId}`}>
                Review them!
              </Link> */}
              <TheReview reviewContent={reviewContent} />

              </div>
   </>
  )

}

export default DisplayReview;