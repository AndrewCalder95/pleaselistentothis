import React from "react";
import Track from "./Track";

const TrackList = ({tracks}) => {

  const trackNodes = tracks.map(track => {
    return (
      <Track name={track.name} url={track.url} artistName = {track.user.artistName} comments = {track.comments} id = {track.id}></Track>
    );
  });

  return(
    <>
      {trackNodes}
    </>
  )

}

export default TrackList;