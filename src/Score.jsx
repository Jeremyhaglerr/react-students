const Score = (props) => {
  return ( 
    <ul className="list-group list-group-flush" >
    {props.student.scores.map((result) => 
      <li className="score list-group-item" key={result.score} >
        <p> 
          <span className="title" >Score:</span> 
         {result.score} <span className="date" > - {result.date}</span></p> </li>
    )}
    </ul>
   );
}
 
export default Score;