import React, {useState, useEffect} from "react";
import MyTrackList from "./MyTrackList"

function MyTracksPage() {

    const [tracks, setTracks] = useState([]);

    const user = JSON.parse(localStorage.getItem('user'));


    useEffect(() => {
      getTracks();
    }, [])

    const getTracks = function(){

    fetch("http://localhost:8080/tracks", {
       headers:{
         Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer " + user.accessToken,
          },
     })
        .then(res => res.json())
        .then(tracks => setTracks(tracks))
    }


  return (

      <>
      <h1>My Tracks</h1>
      <MyTrackList tracks={tracks} />
    </>
  )
}

export default MyTracksPage;