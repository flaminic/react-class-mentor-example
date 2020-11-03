import React, {useState} from "react";

function HelloMentor(props) {

    const [studentsCount, setStudentCount] = useState(0);
    const [status, setStatus] = useState("started!");


    const sayHelloAndCountStudents = () => {
      props.sayHello()
      setStudentCount(studentsCount +1)
  }

  const sayByeAndCountStudents = () => {
    alert("Goodbye!")
    setStudentCount(studentsCount - 1)
  }
  const finishClass = () => {
    setStatus("ended")
  }

  return (
      <div>
          <p> The lesson has {status}!</p>
          <h1> Today's mentor is {props.name}!</h1>
          <p>{studentsCount} students are listening to the lesson</p>
          <button id="hello-button" onClick={sayHelloAndCountStudents}>Say Hello!</button>
          <button id="bye-button" onClick={sayByeAndCountStudents}>Say Bye!</button>
          <button onClick={finishClass}>End Class</button>
      </div>
    );
  }
  
  export default HelloMentor;


  