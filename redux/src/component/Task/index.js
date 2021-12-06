import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Task = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [task, setTask] = useState([]);
  useEffect(() => {
    taskshow();
  }, []);

  const taskshow = async () => {
    const result = await axios.get(`${BASE_URL}/gettask`);
    setTask(result.data);
  };
  const del = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/delTask/${id}`);
      taskshow();
    } catch (error) {
      console.log(error);
    }
  };
  const [newtask, setNewtask] = useState("");
  const addtask = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/createtask`, {
        name: newtask,
      });
      taskshow();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Tasks</h1>
      <input
        onChange={(e) => {
          setNewtask(e.target.value);
          console.log(e);
        }}
        placeholder="add task"
      />{" "}
      <button onClick={addtask}>add</button>
      {task.map((e) => (
        <ul>
          <li>
            {e.name}
            <button
              onClick={() => {
                del(e._id);
              }}
            >
              delete
            </button>
          </li>
        {" "}
        </ul>
      ))}
    </div>
  );
};

export default Task;
