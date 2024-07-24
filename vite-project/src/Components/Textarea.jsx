import React from "react";
import { useState } from "react";
import { Form, Input, Button } from "reactstrap";

function Textarea(props) {
  const [text, setText] = useState("");

  const handleUpclick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase", "Success");
  };

  const handleOnClick = (event) => {
    setText(event.target.value);
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Cleared", "Success");
  };
  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    speechSynthesis.speak(msg);
    props.showAlert("Converted to Speech", "Success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied", "Success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra space", "Success");
  };

  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

  return (
    <>
      <Form style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h1>{props.heading} </h1>
        <Input
          id="exampleText"
          value={text}
          type="textarea"
          rows="9"
          onChange={handleOnClick}
          style={{
            backgroundColor: props.mode === "dark" ? "#042743" : "white",
            color: props.mode === "dark" ? "white" : "#042743",
          }}
        />
        <br />
        <Button color="primary" onClick={handleUpclick} disabled={!text}>
          Convert to UpperCase
        </Button>
        <Button className="mx-1 my-1 " color="primary" onClick={handleClear}>
          Clear
        </Button>
        <Button className="mx-1 my-1" color="primary" onClick={handleSpeak}>
          Speech
        </Button>
        <Button className="mx-1 my-1" color="primary" onClick={handleCopy}>
          Copy Text
        </Button>
        <Button
          className="mx-1  my-1"
          color="primary"
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </Button>
      </Form>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Text Summary</h2>
        <p>
          {wordCount} words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox  above to preview it"}
        </p>
      </div>
    </>
  );
}

export default Textarea;
