const userToken = JSON.parse(localStorage.getItem('user'));

const TrackService =  {

    
    
    addTrack(track){
        fetch("http://localhost:8080/tracks", {
            method: 'POST',
            body: JSON.stringify(track),
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + userToken.accessToken}
                })
      .then(res => res.json());
    },

    addReview(review){
        fetch("http://localhost:8080/reviews", {
            method: 'POST',
            body: JSON.stringify(review),
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + userToken.accessToken}
                })
      .then(res => res.json());
    },

    getCurrentUserById(){
        return fetch("http://localhost:8080/currentuser", {
            method: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + userToken.accessToken}
            })
        .then(res => res.json())
    },
    

    getUsers(){
    fetch("http://localhost:8080/users", {
       headers:{
         Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer " + userToken.accessToken,
          },
     })
        .then(res => res.json())
    }

    
}

export default TrackService;