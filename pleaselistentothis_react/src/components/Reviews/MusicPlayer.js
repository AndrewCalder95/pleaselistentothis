import React from "react";
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"
import ReviewSubmit from "./ReviewSubmit";

const MusicPlayer = ({ trackList, createReview, id }) => {

  return(
    <>
      <h2>{trackList.name}</h2>
      <div>
        <h4> Here's what they've said:</h4>
         <p> {trackList.comments} </p>
        <ReactPlayer url={trackList.url} controls={false} height={"150px"} width={""} />
      </div>
   </>
  )

}

export default MusicPlayer;