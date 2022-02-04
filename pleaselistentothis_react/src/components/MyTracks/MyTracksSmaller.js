import React from "react";
import ReactPlayer from 'react-player'

const MyTracksSmaller = ({ name, url, artistName, reviews, id}) => {

  return(
    <>
      <h4>{name} </h4>
      <ReactPlayer url={url} controls = {false} height={"100px"}/>
      <h4> {reviews} </h4>
      {/* <Link to={"/review/"{id}}>
                Review this!
              </Link> */}
   </>
  )

}

export default MyTracksSmaller;