import React from "react";
import {useState, useEffect} from "react";
import ReactPlayer from 'react-player'
import TrackService from "../../services/trackService";

const MyTracksSmaller = ({ name, url, artistName, id }) => {
   
  // console.log(reviews)

  return(
    <>
      <h4>{name} </h4>
      <ReactPlayer url={url} controls = {false} height={"100px"}/>
      {/* <h4> {reviews} </h4> */}
      {/* <Link to={"/review/"{id}}>
                Review this!
              </Link> */}
   </>
  )

}

export default MyTracksSmaller;