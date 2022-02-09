import React from "react";
import {useState, useEffect} from "react";
import ReactPlayer from 'react-player'
import { useNavigate, Link } from "react-router-dom";

import TrackService from "../../services/trackService";
import View from "./View";

const MyTracks = ({ name, url, artistName, id }) => {
  
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  // const [deleteFired, setDeleteFired] = useState(false)

   
  const deleteTrack = function (){

    fetch(`http://localhost:8080/tracks/${id}`, {
      method: 'DELETE',
       headers:{
         Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer " + user.accessToken,
          },
     })
  }
  
  const handleDelete = ev => {
    ev.preventDefault();
    deleteTrack();
    // navigate("/mytracks");
    // setDeleteFired(true)
    window.location.reload(false);
  } 

  return(
    <>
      <div id = "individualtrack">
      <h4>{name} </h4>
      <ReactPlayer url={url} controls = {false} light={true}  height={"150px"} width={""}/>      {/* <h4> {reviews} </h4> */}
      <Link to={`/view/${id}`}>
                Click here to see if you have any reviewers!
        </Link>
        <div>
          <a id="deleteButton" onClick={handleDelete}>(Click here to delete this track!)</a>
          </div>
        </div>
   </>
  )

}

export default MyTracks;