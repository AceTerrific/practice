import React from "react";
import "./Form.css";
import Button from "./Button";
import { useState } from "react";

import { v4 as uuid4 } from "uuid";

const Form = ({ props, setProps }) => {
  const confirmButton = "confirm";
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setProps([
      ...props,
      {
        id: uuid4(),
        title: title,
        author: author,
        datePost: date,
        content: content,
      },
    ]);
    console.log(props);
    handleReset();
  };

  const handleReset = () => {
    setTitle("");
    setAuthor("");
    setDate("");
    setContent("");
  };
  return (
    <div>
      <form className="main-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          required
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label htmlFor="author">Author:</label>
        <input
          required
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <label htmlFor="date">Date:</label>
        <input
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
          id="date"
          type="text"
        ></input>
        <label htmlFor="content">Content:</label>
        <textarea
          required
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <Button color={confirmButton}>Submit</Button>
      </form>
    </div>
  );
};

export default Form;
