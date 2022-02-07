import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const TrackForm = ({createTrack}) => {
    
    const[name, setName]= useState("");
    const[comments, setComments]= useState("");
    const[url, setUrl]= useState("");

    const handleNameChange = (ev) => setName(ev.target.value);
    const handleCommentChange = (ev) => setComments(ev.target.value);
    const handleUrlChange = (ev) => setUrl(ev.target.value);

    const navigate = useNavigate();


    const handleSubmit = ev => {
    ev.preventDefault();
    createTrack({
      name: name,
      comments: comments,
      url: url
    });
    setName("");
    setComments("");
    setUrl("")
    navigate("/mytracks");
  }
  

  return (
  <div id = "submitform">
    <form onSubmit={handleSubmit}>
      <h1>Add a Track</h1>
      <div id="forminputs">
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={name} 
          required 
          onChange={handleNameChange}
        />
      </div>
      <div id="forminputs">
        <label htmlFor="comments">Comments:</label>
        <input 
          type="text" 
          id="comments" 
          name="comments" 
          value={comments} 
          required 
          onChange={handleCommentChange}
        />
      </div>
      <div id="forminputs">
        <label htmlFor="url">Url:</label>
        <input 
          type="text" 
          id="url" 
          name="url" 
          value={url} 
          required 
          onChange={handleUrlChange}
        />
      </div>

      

      <input type="submit" name="submit" value="Save" class="inputbutton"/>
      </form>
      </div>
  )
};

export default TrackForm;