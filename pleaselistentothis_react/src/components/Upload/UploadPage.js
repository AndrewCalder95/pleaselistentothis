import React, {useState} from "react";
import TrackForm from "../../components/Upload/TrackForm"
import TrackService from "../../services/trackService";

const UploadPage = () =>{

    const [tracks, setTracks] = useState([]);

    const createTrack = newTrack=> {
    TrackService.addTrack(newTrack)
  };




return (
<>
<TrackForm createTrack={createTrack}/>
</>
)

};

export default UploadPage;