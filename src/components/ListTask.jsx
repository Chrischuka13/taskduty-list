import React from "react";

export default function ListTask({ tasks }) {
    if(!tasks) return <p>Task not found</p>

return (
    <div>
        {tasks.map((task) => (
        <div key={task._id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <small>{task.tags}</small>
        </div>
      ))}
    </div>
)
}