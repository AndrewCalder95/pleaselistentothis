import TrackService from "../../services/trackService";
import React, { useState, useEffect } from "react";
import MyTracksSmaller from "./MyTracksSmaller";

const MyTrackList = ({tracks}) => {

  const [currentId, setCurrentId] = useState("")
  const [reviews, setReviews] = useState([])

  const userToken = JSON.parse(localStorage.getItem('user'));

  // useEffect(() => {
  //   getReviewsByTrackId();
  // }, [])


  const userId = TrackService.getCurrentUserById().then((user) => setCurrentId(user.id));
  
  const getReviewsByTrackId = function(id){
    return fetch(`http://localhost:8080/reviews/trackid/${id}`, {
        method: 'GET',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + userToken.accessToken}
        })
      .then(res => res.json())
      .then(reviews => setReviews(reviews))
  }

//   const userId = TrackService.getCurrentUserById().then((user)=> setCurrentId(user.id));

  const filteredNodes = tracks.filter(track => currentId === track.user.id).map(track => {
    return (
      <MyTracksSmaller name={track.name} url={track.url} artistName = {track.user.artistName} ></MyTracksSmaller>
    );
  });
  
  // reviews = {getReviewsByTrackId(track.id)}

  return(
    <>
      {filteredNodes}
    </>
  )

}

export default MyTrackList;