import React from "react";
import ReactPlayer from 'react-player'

const Track = ({name, url}) => {

  return(
    <>
      <h4>{name}</h4>
      <ReactPlayer url={url} controls = {true} height={"100px"}/>
    </>
  )

}

export default Track;