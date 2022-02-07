import TrackService from "../../services/trackService"
import React, { useState, useEffect } from "react";
import Track from "../DiscoverPage/Track";

const TrackList =() => {

  const [reviewedTrackIds, setreviewedTrackIds] = useState([]);
  const [displayMessage, setDisplayMessage] = useState(true);
  const [hideMessage, setHideMessage] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));

  const userId = TrackService.getCurrentUserById().then((user) => {
    getUnReviewedTracks(user.id)
  });

  // useEffect(() => {
  //   checkForContent();
  // }, [])
  

  // const checkForContent = function () {
  //   if (reviewedTrackIds.length == 0) {
  //     getUnReviewedTracks(user.id);
  //   } else { 
  //     setDisplayMessage(false)
  //     setHideMessage(true)
  //   }
  // }

  
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
  

  const filteredNodes = reviewedTrackIds.map(track =>
  {
     return (
       <Track name={track.name} url={track.url} artistName = {track.user.artistName} comments = {track.comments} id = {track.id}></Track>       
       );
  });
  

  return(
    <>
      <h1 hidden={hideMessage}>Discover </h1>
      <div id="notrackmessage">
      <h2 hidden={displayMessage}> <i class="far fa-frown fa-2x"></i></h2>
      <h2 hidden={displayMessage}> Sorry, there are no tracks to review at the moment!! </h2>
      <h2 hidden={displayMessage}> Please check back later! </h2>
      </div>
      
      { filteredNodes}
    </>
  )

}

export default TrackList;