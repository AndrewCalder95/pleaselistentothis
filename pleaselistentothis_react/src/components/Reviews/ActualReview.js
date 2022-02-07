import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import ReviewSubmit from "./ReviewSubmit";
import MusicPlayer from "./MusicPlayer";
import TrackService from "../../services/trackService";



const ActualReview = () => {
  
    
    const [track, setTrack] = useState([]);
    let { id } = useParams();
  
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
        <MusicPlayer track={track} />
          <ReviewSubmit createReview={createReview} id={id}/>
      </>
    )
};

export default ActualReview;