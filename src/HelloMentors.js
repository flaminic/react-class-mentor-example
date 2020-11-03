import React, {useState} from "react";

function HelloMentor(props) {
    const [studentsCount, setStudentCount] = useState(0);
    const [greetings, setGreetings] = useState([]);

    const sayHelloAndCountStudents = () => {
        alert("Hello!")
        setStudentCount(studentsCount +1)
        setGreetings(greetings.concat("Hello"))
    }

    const sayCiaoAndCountStudents = () => {
      alert("Ciao!")
      setStudentCount(studentsCount +1)
      setGreetings(greetings.concat("Ciao"))

  }

  const saySalutAndCountStudents = () => {
    alert("Salut!")
    setStudentCount(studentsCount +1)
    setGreetings(greetings.concat("Salut"))
}

    return (
      <div>
          <h1> Today's mentors are {props.names.join(", ")}!</h1>
           <p>{studentsCount} students are listening to the lesson</p>
          <button id="hello-button" onClick={sayHelloAndCountStudents}>Say Hello!</button>
          <button id="hello-button" onClick={sayCiaoAndCountStudents}>Say Ciao!</button>
          <button id="hello-button" onClick={saySalutAndCountStudents}>Say Salut!</button>

          <h2>Here all all the greetings:</h2>
          <p>{greetings.join(", ")}</p>


      </div>
    );
  }
  
  export default HelloMentor;


  