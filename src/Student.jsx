import Score from "./Score";
import './App.css'

const Student = (props) => {
  return ( props.students.map((student,idx) =>
    <div className="student" >
      <p className="name" > <span className="title" > Name:</span> {student.name} </p> 
      <p> <span className="title" > Bio: </span>{student.bio}</p>
      <Score student={student}/>
    </div>
    )
   )
}
 
export default Student;