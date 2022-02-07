import React from "react";
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"
import IndividualTrack from "../IndividualTrack";

const Track = ({ name, url, artistName, comments, id}) => {

  return(
    <> 
      <div id="individualtrack">
      <h4>{artistName}: {name} </h4>
      <ReactPlayer url={url} controls = {false} light={true} height={"150px"} width={""}/>
      <Link to={`/track/${id}`}>
                Review this!
        </Link>
        </div>
   </>
  )

}

export default Track;