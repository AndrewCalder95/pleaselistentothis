import React from "react";
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"

const TrackPage = ({ track }) => {

  return(
    <>
    {/* <h1> {track.user.name}: {track.name}</h1> */}
      <ReactPlayer url={track.url} controls = {false} height={"100px"}/>
      <h4> {track.comments} </h4>
   </>
  )

}

export default TrackPage;