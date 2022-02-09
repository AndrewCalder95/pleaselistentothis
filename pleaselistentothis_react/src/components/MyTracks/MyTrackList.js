import TrackService from "../../services/trackService";
import React, { useState, useEffect } from "react";
import MyTracks from "./MyTracks";

const MyTrackList = ({tracks}) => {

  const [currentId, setCurrentId] = useState("")
  const [displayMessage, setDisplayMessage] = useState(true);
  const [hideMessage, setHideMessage] = useState(false);


  const userId = TrackService.getCurrentUserById().then((user) => setCurrentId(user.id));
  
  useEffect(() => {
   checkForContent()
    }, [tracks])

  
  const filteredNodes = tracks.filter(track => currentId === track.user.id).map(track => {
    return (
      <MyTracks name={track.name} url={track.url} artistName = {track.user.artistName} id={track.id} ></MyTracks>
    );
  });

  const checkForContent = function () {
    if (filteredNodes.length == 0) {
      setDisplayMessage(false)
      setHideMessage(true)
    }
    else {
      setDisplayMessage(true)
  }
  }
  
  return(
    <>
      <h1 hidden={hideMessage}>My Tracks</h1>
      <div id="notrackmessage">
        <h2 hidden={displayMessage}> <i class="far fa-frown-open fa-2x" ></i></h2>
        <h2 hidden={displayMessage}> You haven't added any tracks yet! </h2>
        <h2 hidden={displayMessage}> Upload a track and watch the reviews flow in!! </h2>
      </div>
      {filteredNodes}
    </>
  )
}

export default MyTrackList;