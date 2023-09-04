import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogPost from "./components/BlogPost";
import Form from "./components/Form";
import SAMPLE_DATA from "./data/sample-data.json";
import { useState } from "react";
import EditForm from "./components/EditForm";

function App() {
  const [post, setPost] = useState(SAMPLE_DATA);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState([]);

  return (
    <div className="App">
      <header>
        <Header />
        {isEditing ? (
          <EditForm
            editValue={editValue}
            setEditValue={setEditValue}
            setIsEditing={setIsEditing}
            isEditing={isEditing}
          />
        ) : (
          <>
            <Form props={post} setProps={setPost} />
            {post.length === 0 ? (
              <h3>No blog post to display</h3>
            ) : (
              <BlogPost
                props={post}
                setProps={setPost}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                editValue={editValue}
                setEditValue={setEditValue}
              />
            )}
          </>
        )}

        <Footer />
      </header>
    </div>
  );
}

export default App;
