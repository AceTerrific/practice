import "./BlogPost.css";
import Button from "./Button";

const BlogPost = ({
  props,
  setProps,
  isEditing,
  setIsEditing,
  setEditValue,
}) => {
  const editButton = "edit";
  const deleteButton = "danger";

  const handleDelete = (id) => {
    setProps(
      props.filter((post) => {
        return post.id !== id;
      })
    );
  };
  const handleEdit = (id) => {
    setIsEditing(!isEditing);

    setEditValue(
      props.filter((post) => {
        return post.id === id;
      })
    );
  };

  return (
    <div className="post-main-container">
      {props.map((post) => {
        return (
          <div className="post-box-container" key={post.id}>
            <div className="post-container">
              <h2>{post.title}</h2>
              <h4>
                By {post.author} on {post.datePost}
              </h4>
              <p>{post.content}</p>
            </div>
            <div className="button-container">
              <Button
                color={editButton}
                handleClick={() => handleEdit(post.id)}
              >
                Edit
              </Button>
              <Button
                color={deleteButton}
                handleClick={() => handleDelete(post.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default BlogPost;
