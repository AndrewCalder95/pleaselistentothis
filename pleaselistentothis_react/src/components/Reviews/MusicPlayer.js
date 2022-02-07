import React from "react";
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"

const MusicPlayer = ({ track }) => {

  return(
    <>
      <h1>{track.name}</h1>
      <div>
        <h4> Here's what they've said:</h4>
         <p> {track.comments} </p>
      <ReactPlayer url={track.url} controls={false} height={"150px"} width={""}/>
      </div>
   </>
  )

}

export default MusicPlayer;