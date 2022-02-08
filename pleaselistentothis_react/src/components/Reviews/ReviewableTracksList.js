// import Review from "./MyReview";
import React, {useState, useEffect} from "react";
import ReactPlayer from 'react-player'
import ReviewableTracks from "./ReviewableTracks";


const ReviewableTracksList = ({ tracks, reviewContent }) => {


 const filteredNodes = tracks.map(track => {
     return (
         <ReviewableTracks url={track.url} trackName={track.name} artistName={track.user.artistName} id={track.id} reviewContent={reviewContent}/>
     );
    });
    
    return (
        <>
            {filteredNodes} 
        </>
    )

}


export default ReviewableTracksList
