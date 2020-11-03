import React, {useState} from "react";

function CreateAccountForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function handleUsernameChange(event) {
      setUsername(event.target.value);
    }
    function handleEmailChange(event) {
      setEmail(event.target.value);
    }
    function handlePasswordChange(event) {
      setPassword(event.target.value);
    }

    function handleAllChanges(event){
        if (event.target.name === "username") {
            setUsername(event.target.value);
        } else if (event.target.name === "password"){
            setPassword(event.target.value);
        } else if (event.target.name === "email"){
            setEmail(event.target.value);
        }

    }

    const submitForm = (event) => {
        event.preventDefault();

        console.log("form submitted")
        fetch("https://httpstat.us/200", {
            method: "POST",
            body: JSON.stringify({
              username: username,
              email: email,
              password: password
            }),
            headers: {
              "Content-Type": "application/json"
            }
          }).then(() => console.log("DONE"));
    }

  
    return (
      <form onSubmit={submitForm}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleAllChanges}
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleAllChanges}
          />
        </div>
        <button>Sign up </button>
      </form>
    );
  }

  export default CreateAccountForm