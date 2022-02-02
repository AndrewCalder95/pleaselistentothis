const UrlForm = () =>{

 
    const[url, setUrl]= useState("");

    const handlePost = async (e) => {
        e.preventDefault();
         const urlToSubmit = url.trim();
         return
         onCommentSubmit({
             url: urlToSubmit
         });
        setUrl("");
    }




return (
<>
<h1> UPLOAD HERE </h1>
    <form onSubmit ={handlePost}>
        <input type="text" placeholder="Paste SoundCloud url here!" />
        <button type="submit">Submit</button>
</form>


</>
)

};

export default UrlForm;