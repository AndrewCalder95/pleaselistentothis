import React, {useState, useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";



const ReviewSubmit = ({ createReview, id }) => {
  
    
  const [reviewContent, setReviewContent] = useState("");
  const [track, setTrack] = useState({ id });
  const [disable, setDisable] = useState(false);
  const [enable, setEnable] = useState(true);




    const handleReviewContentChange = (ev) => setReviewContent(ev.target.value);


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
  }

return (
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
      <h1>Thank you!</h1>
      <Link to={"/displayreview/${id}"}>
      Click here to see what they said about your track!   
              </Link>
      
      </div>
    </form>
  )
};

export default ReviewSubmit;