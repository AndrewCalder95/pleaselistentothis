import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const CommentForm = ({createReview}) => {
    
    const[reviewContent, setReviewContent]= useState("");
    const[track, setTrack]= useState("");


    const handleReviewContentChange = (ev) => setReviewContent(ev.target.value);


    const navigate = useNavigate();


    const handleSubmit = ev => {
    ev.preventDefault();
    createReview({
      reviewContent:reviewContent,
      track: track
    });
    setReviewContent("");
    // navigate("/mytracks");
  }


  

return (
    <form onSubmit={handleSubmit}>
      <h1>Submit your comment!</h1>
      <div>
        <label htmlFor="comment">Name:</label>
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
    </form>
  )
};

export default CommentForm;