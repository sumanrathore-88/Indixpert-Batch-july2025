import React, { useReducer, useState } from "react";
const initialState = [];


function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      if (!action.payload.trim()) return state;
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];

    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
}

export default function Todolist() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    dispatch({ type: "ADD", payload: input });
    setInput("");
  };

  return (
    <div className="container mt-4">
      <div className="card p-3">
        <h4 className="mb-3">Todo List</h4>

        
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter list item name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn btn-secondary" onClick={handleAdd}>
            Add Todo Item
          </button>
        </div>

        
        <ul className="list-group">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div
                style={{ cursor: "pointer" }}
                onClick={() =>
                  dispatch({ type: "TOGGLE", payload: todo.id })
                }
              >
                {todo.completed ? (
                  <>
                    <img
                      src="https://img.icons8.com/?size=32&id=cL95UxTQ0nU&format=png"
                      alt="done"
                      width="20"
                    />
                    <s className="ms-2">{todo.text}</s>
                  </>
                ) : (
                  <>
                    <img
                      src="https://img.icons8.com/?size=60&id=78597&format=png"
                      alt="pending"
                      width="20"
                    />
                    <span className="ms-2">{todo.text}</span>
                  </>
                )}
              </div>

              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() =>
                  dispatch({ type: "REMOVE", payload: todo.id })
                }
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}