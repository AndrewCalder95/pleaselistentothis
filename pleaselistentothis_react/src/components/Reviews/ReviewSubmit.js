import React, {useState, useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";
import MusicPlayer from "./MusicPlayer";

const ReviewSubmit = ({ createReview, id, trackList, reviewContentFromReviewer }) => {
  
    
  const [reviewContent, setReviewContent] = useState("");
  const [track, setTrack] = useState({ id });
  const [disable, setDisable] = useState(false);
  const [enable, setEnable] = useState(true);
  const [hideReviewSubmit, setHideReviewSubmit] = useState(true)

  const handleReviewContentChange = (ev) => setReviewContent(ev.target.value);

  console.log(reviewContentFromReviewer)


    const navigate = useNavigate();


    const handleSubmit = ev => {
    ev.preventDefault();
    createReview({
      reviewContent: reviewContent,
      track: track
    });
    setReviewContent("");
    // navigate("/mytracks");
      setDisable(true);
      setEnable(false);
      setHideReviewSubmit(false)
  }

  return (
    <>
      {hideReviewSubmit ?
       <MusicPlayer trackList = {trackList}/>
       : null}
  <form onSubmit={handleSubmit}>
    <div hidden = {disable}>
      <p>Share your thoughts!</p>
      <div>
        <input 
          class = "reviewForm"
          type="text" 
          id="name"
          name="comment" 
          value={reviewContent} 
          required 
          onChange={handleReviewContentChange}
        />
      </div>
      <input type="submit" name="submit" value="Post" />
    </div>
    <div hidden={enable}>
          <h2>Thank you!</h2>
          <h3>Here's what they said about your track:</h3>
          <p>{reviewContentFromReviewer}</p>
      {/* <Link to={"/displayreview/${id}"}>
      Click here to see what they said about your track!   
              </Link> */}
      </div>
      </form>
      </>
  )
};

export default ReviewSubmit;