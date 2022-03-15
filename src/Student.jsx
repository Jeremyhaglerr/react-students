import Score from "./Score";
import './App.css'

const Student = (props) => {
  return ( props.students.map((student,idx) =>
    <div className="student card card-body" key={student.name} >
      <p className="name card-header" > <span className="title" > Name:</span> {student.name} </p> 
      <p className="card-subtitle mb-2" > <span className="title" > Bio:</span>{student.bio}</p>
      <Score student={student}/>
    </div>
    )
   )
}
 
export default Student;