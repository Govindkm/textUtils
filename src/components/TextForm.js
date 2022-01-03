import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("Enter Text Here");
  const handleTextbox = (e) => {
    setText(e.target.value);
  };
  const uppercase = (e) => {
    let newText = text;
    setText(newText.toUpperCase());
  };
  const lowercase = (e) => {
    let newText = text;
    setText(newText.toLowerCase());
  };
  const capitalize = (e) => {
    let newText = text;
    let output = [];
    newText = text.split(" ");
    newText.forEach((element) => {
      element = element.toLowerCase();
      element = element[0].toUpperCase() + element.slice(1);
      output.push(element);
    });
    newText = output.join(" ");
    setText(newText);
  };

  const clear = (e) => {
    setText("");
  };
  const copy = (e) => {
    window.navigator.clipboard.writeText(text);
  };
  const removeSpaces = (e) => {
    setText(text.split(/[ ]+/).join(" "));
  };
  return (
    <div>
      <form>
        <div className="form-group container">
          <h2>
            <label htmlFor="textBox">Enter Your Text Here</label>
          </h2>
          <textarea
            className="form-control"
            id="textBox"
            rows="8"
            value={text}
            onChange={handleTextbox}
          ></textarea>
          <div>
            <button
              type="button"
              className="btn btn-primary mt-1 mx-1"
              onClick={uppercase}
            >
              UPPERCASE
            </button>

            <button
              type="button"
              className="btn btn-primary mt-1 mx-1"
              onClick={capitalize}
            >
              Capitalize
            </button>

            <button
              type="button"
              className="btn btn-primary mt-1 mx-1"
              onClick={lowercase}
            >
              lowercase
            </button>

            <button
              type="button"
              className="btn btn-primary mt-1 mx-1"
              onClick={removeSpaces}
            >
              Remove Extra Space
            </button>

            <button
              type="button"
              className="btn btn-primary mt-1 mx-1"
              onClick={clear}
            >
              Clear Text
            </button>

            <button
              type="button"
              className="btn btn-primary mt-1 mx-1"
              onClick={copy}
            >
              Copy to Clipboard
            </button>
          </div>
        </div>
      </form>
      <div className="container mt-3">
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length}
          {text.split(" ").length <= 1 ? " word" : " words"} and {text.length}
          {" characters."}
        </p>
        <h3>Text Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
