import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const addUser = (e) => {
    e.preventDefault();
    setUser((state) => [
      ...state,
      {
        name: name,
        email: email,
        password: password,
      },
    ]);
    setName("");
    setEmail("");
    setPassword("");

    console.log("successful...");
  };

  const add = () => {
    setCounter(counter + 1);
  };
  const reset = () => {
    setCounter(0);
  };

  const remove = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h3>React App...</h3>
      <div>
        <form onSubmit={addUser}>
          <input name={name} placeholder="name" onChange={handleName} />
          <input placeholder="email" name={email} onChange={handleEmail} />
          <input
            placeholder="password"
            name={password}
            onChange={handlePassword}
          />
          <button>register</button>
        </form>
      </div>
      <div>{counter}</div>
      <div>
        <button onClick={add}>+</button>
        <button onClick={reset}>reset</button>
        <button onClick={remove}>-</button>
      </div>
    </div>
  );
};

export default Counter;
