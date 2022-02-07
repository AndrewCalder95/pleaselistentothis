import TrackService from "../../services/trackService";
import React, { useState, useEffect } from "react";
import MyTracks from "./MyTracks";

const MyTrackList = ({tracks}) => {

  const [currentId, setCurrentId] = useState("")

  const userId = TrackService.getCurrentUserById().then((user) => setCurrentId(user.id));
  
  const filteredNodes = tracks.filter(track => currentId === track.user.id).map(track => {
    return (
      <MyTracks name={track.name} url={track.url} artistName = {track.user.artistName} id={track.id} ></MyTracks>
    );
  });
  
  return(
    <>
      {filteredNodes}
    </>
  )

}

export default MyTrackList;