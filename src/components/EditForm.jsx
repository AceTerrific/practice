import React from "react";
import "./EditForm.css";
import Button from "./Button";
import { useState } from "react";

const EditForm = ({ editValue, setEditValue, isEditing, setIsEditing }) => {
  const confirmButton = "edit save-changes";
  const [content, setContent] = useState(editValue[0].content);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
    setEditValue((edit) => {
      return (edit[0].content = content);
    });

    console.log(editValue);
  };

  return (
    <form className="main-form" onSubmit={handleSubmit}>
      <h3>Editing</h3>
      <label htmlFor="title">Title:</label>
      <input id="title" value={editValue[0].title} type="text"></input>
      <label htmlFor="author">Author:</label>
      <input id="author" value={editValue[0].author}></input>
      <label htmlFor="date">Date:</label>
      <input value={editValue[0].datePost} id="date" type="text"></input>
      <label htmlFor="content">Content:</label>
      <textarea
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <Button color={confirmButton}>Save Changes</Button>
    </form>
  );
};

export default EditForm;
