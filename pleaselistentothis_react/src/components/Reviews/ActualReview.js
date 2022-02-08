import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import ReviewSubmit from "./ReviewSubmit";
import MusicPlayer from "./MusicPlayer";
import TrackService from "../../services/trackService";



const ActualReview = ({id, reviewContent}) => {
  
    
    const [track, setTrack] = useState([]);
    // let { id } = useParams();
  
    console.log({ id })
  
    
      const userToken = JSON.parse(localStorage.getItem('user'));
  
      useEffect(() => {
      getTrack();
      }, [])
  
  
     const getTrack = function(){
  
      fetch(`http://localhost:8080/track/${id}`, {
         headers:{
           Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + userToken.accessToken,
            },
       })
          .then(res => res.json())
          .then(track => setTrack(track))
      }
  
      const createReview = newReview => {
      TrackService.addReview(newReview)
      }

      return (

        <>
          <ReviewSubmit trackList={track} createReview={createReview} id={id} reviewContentFromReviewer={reviewContent}/>
          
        </>
    )
};

export default ActualReview;