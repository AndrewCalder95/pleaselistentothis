import React from "react";
import {useState, useEffect} from "react";
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"
import TrackService from "../../services/trackService";
import View from "./View";

const MyTracks= ({ name, url, artistName, id }) => {
   
  // console.log(reviews)

  return(
    <>
      <div id = "individualtrack">
      <h4>{name} </h4>
      <ReactPlayer url={url} controls = {false} light={true}  height={"150px"} width={""}/>      {/* <h4> {reviews} </h4> */}
      <Link to={`/view/${id}`}>
                Click here to see if you have any reviewers!
        </Link>
        </div>
   </>
  )

}

export default MyTracks;