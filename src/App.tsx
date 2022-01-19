import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [text, setText] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="text"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {submitted ? <h1 id="submitted">Form Submitted</h1> : null}
    </div>
  );
}

export default App;