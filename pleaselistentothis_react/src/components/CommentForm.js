import React, {useState, useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";



const CommentForm = ({ createReview, id }) => {
  
    
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
      <p>Submit your comment!</p>
      <div>
        <label htmlFor="comment" >Name:</label>
        <input 
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
      <h4>We'll let you know when they review your track!</h4>
      <Link to={"/discover"}>
                In the meantime, how about reviewing another track?
              </Link>
      
      </div>
    </form>
  )
};

export default CommentForm;