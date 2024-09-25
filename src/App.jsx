import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);
  function handleAdd(event) {
    event.preventDefault();

    if (input.trim() === "") return;

    const user = {
      id: Date.now(),
      task: input,
    };
    setUsers([...users, user]);
    setInput("");
  }
  function handleDelete(id) {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  }

  return (
    <div>
      <form className="w-1/3 h-1/3 mt-40 bg-white p-4 rounded-md flex justify-between gap-5 mx-auto">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="rounded-md bg-slate-300 border border-gray-400 p-2 w-80"
          type="text"
          placeholder="Add Task"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-800 border-none rounded-md p-2"
        >
          ADD
        </button>
      </form>

      <ul className="w-1/3 mx-auto mt-5">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-gray-200 p-2 mb-2 rounded-md flex justify-between items-center"
          >
            {user.task}
            <button
              onClick={() => handleDelete(user.id)}
              className="bg-red-500 text-white rounded-md p-1 ml-2"
            >
              O'chirish
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
