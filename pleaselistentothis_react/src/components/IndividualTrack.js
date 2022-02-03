import React, {useState, useEffect} from "react";

const IndividualTrack = () => {

    const [track, setTrack] = useState([]);



    const userToken = JSON.parse(localStorage.getItem('user'));


   const getTrack = function(id){

    fetch(`http://localhost:8080/track/${id}`, {
       headers:{
         Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer " + userToken.accessToken,
          },
     })
        .then(res => res.json())
    }

    return (

      <>
      <h1>This Track</h1>
    </>
  )



}





export default IndividualTrack