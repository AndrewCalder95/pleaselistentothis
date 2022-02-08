import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ActualReview from './ActualReview';

const ReviewableTracks = ({ url, trackName, artistName, id, reviewContent}) => {
  
  const [showReviewPage, setShowReviewPage] = useState(false)
  const [hideSwitch, setHideSwitch] = useState("");

  const handleShowReviewPage = () => {
    setShowReviewPage(true)
    setHideSwitch(true)

  }

    return(
      <>
        <div hidden={hideSwitch}>
        <h4>{artistName}: {trackName} </h4>
        <ReactPlayer url={url} controls={false} height={"150px"} width={""} />
          <button onClick={handleShowReviewPage}> Review this one!</button>
          </div>
        {showReviewPage ?
          <ActualReview id={id} reviewContent={reviewContent}/>
                  : null}

       </>
      )

}

export default ReviewableTracks;