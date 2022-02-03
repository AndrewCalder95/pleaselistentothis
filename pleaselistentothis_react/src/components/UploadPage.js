import React, {useState} from "react";
import TrackForm from './TrackForm'
import TrackService from "../services/trackService";
const UploadPage = () =>{

    const [tracks, setTracks] = useState([]);

    const createTrack = newTrack=> {
    TrackService.addTrack(newTrack)
    //   .then(savedTrack => setTracks([ ...tracks, savedTrack ]));
  };




return (
<>
<TrackForm createTrack={createTrack}/>
</>
)

};

export default UploadPage;