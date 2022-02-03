import TrackService from "../services/trackService";
import React, { useState, useEffect } from "react";
import Track from "./Track";

const TrackList = ({tracks}) => {

  // useEffect(() => {
  //     TrackService.getCurrentUserById()
  //   }, [])

  const [currentId, setCurrentId] = useState("")



  const userId = TrackService.getCurrentUserById().then((user)=> setCurrentId(user.id));

  const filteredNodes = tracks.filter(track => track.user.id !== currentId).map(track => {
    return (
      <Track name={track.name} url={track.url} artistName = {track.user.artistName} comments = {track.comments} id = {track.id}></Track>
    );
  });
  

  return(
    <>
      {filteredNodes}
    </>
  )

}

export default TrackList;