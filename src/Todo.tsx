import React from "react";
import useTodo from "./Todo.hooks";
const Todo: React.FC = () => {
  const { todoWithComments } = useTodo();
  return (
    <div>
      {todoWithComments.map(todoWithComment => {
        return (
          <div>
            <div>id: {todoWithComment.id}</div>
            <div>text: {todoWithComment.text}</div>
            <div>
              {todoWithComment.comments.map(comment => {
                return <div>commentText: {comment.text}</div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Todo;
