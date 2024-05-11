import {useState} from "react";
import "./App.css";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setIsValid(true);
      setErrorMessage("");
    } else {
      setIsValid(false);
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      {/* <p>{errorMessage}</p> */}
      {isValid ? (
        <p>"Welcome, {username}!"</p>
      ) : (
        <>
         {errorMessage && <p>{errorMessage}</p>}
          <form onSubmit={onSubmitHandler}>
            <label for="username"> Username:</label>
            <input
              type="text"
              id="username"
              placeholder="username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label for="password"> Password:</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit" >Submit</button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
