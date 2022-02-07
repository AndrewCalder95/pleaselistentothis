import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';

const ReviewableTracks = ({ url, trackName, artistName, id}) => {

    return(
        <>
          <h4>{artistName}: {trackName} </h4>
          <ReactPlayer url={url} controls = {false} height={"150px"} width={""}/>
          <Link to={`/reviewed/track/${id}`}>
                    Review this one!
            </Link>

            
       </>
      )

}

export default ReviewableTracks;