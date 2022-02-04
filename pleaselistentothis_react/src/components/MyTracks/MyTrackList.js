import TrackService from "../../services/trackService";
import React, { useState } from "react";
import MyTracksSmaller from "./MyTracksSmaller";

const MyTrackList = ({tracks}) => {

    const [currentId, setCurrentId] = useState("")


  const userId = TrackService.getCurrentUserById().then((user)=> setCurrentId(user.id));

//   const userId = TrackService.getCurrentUserById().then((user)=> setCurrentId(user.id));

  const filteredNodes = tracks.filter(track => currentId === track.user.id ).map(track => {
    return (
      <MyTracksSmaller name={track.name} url={track.url} artistName = {track.user.artistName} reviews = {track.reviews} id = {track.id}></MyTracksSmaller>
    );
  });
  

  return(
    <>
      {filteredNodes}
    </>
  )

}

export default MyTrackList;