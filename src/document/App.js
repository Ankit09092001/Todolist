import React, { useEffect, useState } from "react";
import List from "./list";
import "./styles.css";

function App() {
  const [set, setTask] = useState("");
  const [item, setItems] = useState([]);
  const LOCAL_STORAGE_KEY = "item";

  useEffect(() => {
    const retriveItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setItems(retriveItems);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(item));
  }, [item]);
  function setToDo(work) {
    setTask(work.target.value);
  }
  function handledelete(id) {
    const newList = item.filter((value, idx) => {
      return idx !== id;
    });
    /*lis.splice(id,1)*/
    setItems(newList);
  }
  function setToItem() {
    if (set.length === 0) {
      alert("Input Field is Empty");
    } else {
      setItems((prevValue) => {
        return [...prevValue, set];
      });
    }
    setTask("");
  }
  function reset() {
    setItems([]);
  }

  return (
    <div>
      <div className="animate">
        <h2>To Do List</h2>
      </div>
      <div className="App">
        <h1>Today's Task</h1>

        <input
          placeholder="Add a task.."
          onChange={setToDo}
          value={set}
        ></input>
        <button className="btn" onClick={() => setToItem()}>
          Add
        </button>
        <br />
        <button className="delbtn" onClick={reset}>
          Reset
        </button>

        <ol>
          {item.map((todoitem, index) => (
            <List
              passing={todoitem}
              index={index}
              handledelete={handledelete}
              key={index}
            />
          ))}
        </ol>
      </div>
      <div className="footer">
        <p>Developed by ~ Ankit Dubey</p>
      </div>
    </div>
  );
}

export default App;
