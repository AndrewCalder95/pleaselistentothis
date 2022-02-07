import TrackService from "../../services/trackService"
import React, { useState, useEffect } from "react";
import Track from "../DiscoverPage/Track";

const TrackList =() => {

  const [reviewedTrackIds, setreviewedTrackIds] = useState([]);

  const user = JSON.parse(localStorage.getItem('user'));

  const userId = TrackService.getCurrentUserById().then((user) => {
    // setCurrentId(user.id);
   getUnReviewedTracks(user.id);
  });
  
  const getUnReviewedTracks = function (id) {

    fetch(`http://localhost:8080/track/discover/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + user.accessToken,
      },
    })
      .then(res => res.json())
      .then(reviewedTracks => {
        setreviewedTrackIds(reviewedTracks)
      })
  }
  

  const filteredNodes = reviewedTrackIds.map(track => {
     return (
       <Track name={track.name} url={track.url} artistName = {track.user.artistName} comments = {track.comments} id = {track.id}></Track>       
       );
  });
  

  return(
    <>
      <h1>Discover</h1>
      { filteredNodes}
    </>
  )

}

export default TrackList;