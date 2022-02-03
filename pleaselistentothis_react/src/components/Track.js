import React from "react";
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"

const Track = ({ name, url, artistName, comments, id}) => {

  return(
    <>
      <h4>{artistName}: {name} </h4>
      <ReactPlayer url={url} controls = {false} height={"100px"}/>
      <h4> {comments} </h4>
      <Link to={`/track/${id}`}>
                Review this!
              </Link>
   </>
  )

}

export default Track;