import TrackService from "../../services/trackService"
import React, { useState, useEffect } from "react";
import Track from "../DiscoverPage/Track";

const TrackList = ({ tracks }) => {


  const [currentId, setCurrentId] = useState("")
  const [reviewedTrackIds, setreviewedTrackIds] = useState([]);

  const user = JSON.parse(localStorage.getItem('user'));

  const userId = TrackService.getCurrentUserById().then((user) => setCurrentId(user.id));

  useEffect(() => {
    getReviewedTracks();
  }, [currentId])
  
  console.log("current user Id is: " + currentId)
  
  const getReviewedTracks = function () {

    fetch(`http://localhost:8080/reviews/userid?userId=${currentId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + user.accessToken,
      },
    })
      .then(res => res.json())
      .then(reviewedTrackIds => setreviewedTrackIds(reviewedTrackIds[0].id))
  }
  
  console.log("reviewed track Ids are:" + reviewedTrackIds)
 
  const nodes = tracks.filter(function (e) {
    return this.indexOf(e) < 0;
  },
    reviewedTrackIds
  );
  console.log(nodes)

  // const filteredNodes = tracks.filter(track => track.user.id !== currentId).map(track => {
  //   return (
  //     <Track name={track.name} url={track.url} artistName = {track.user.artistName} comments = {track.comments} id = {track.id}></Track>
  //   );
  // });
  

  return(
    <>
      {nodes}
    </>
  )

}

export default TrackList;