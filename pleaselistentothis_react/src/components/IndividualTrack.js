import React, {useState, useEffect} from "react";
import TrackPage from "../components/TrackPage";
import CommentForm from "../components/CommentForm";
import TrackService from "../services/trackService";
import { useParams } from 'react-router-dom'

const IndividualTrack = () => {

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
      <TrackPage track={track} />
        <CommentForm createReview={createReview} id={id}/>
    </>
  )



}

export default IndividualTrack