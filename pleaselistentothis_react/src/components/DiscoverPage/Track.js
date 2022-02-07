import React from "react";
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"
import IndividualTrack from "../IndividualTrack";

const Track = ({ name, url, artistName, comments, id}) => {

  return(
    <>
      <h4>{artistName}: {name} </h4>
      <ReactPlayer url={url} controls = {false} height={"150px"} width={""}/>
      <Link to={`/track/${id}`}>
                Review this!
            </Link>
   </>
  )

}

export default Track;