import MyReview from "./MyReview";

const ReviewList = ({ reviews }) => {


     
 const filteredNodes = reviews.map(review => {
     return (
          <MyReview reviewContent={review.reviewContent} user={review.user.artistName} userId={review.user.id} trackId={review.id} name = {review.name}></MyReview>
     )
 });

    return (
        <>
    
            {filteredNodes}
        </>
    )

}


export default ReviewList
