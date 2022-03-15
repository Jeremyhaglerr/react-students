const Score = (props) => {
  return ( 
    props.student.scores.map((result) => 
      <div className="score" >
        <p> 
          <span className="title" > Score:</span> 
          {result.score} <span className="date" > - {result.date}</span></p> </div>
    )
   );
}
 
export default Score;