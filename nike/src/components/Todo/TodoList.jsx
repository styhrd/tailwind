import React, { useState, useEffect } from "react";

const TodoList = () => {
  const initial = JSON.parse(localStorage.getItem("my_item")) || [];
  const [input, setInput] = useState("");
  const [list, setList] = useState(initial);
  const [id, setId] = useState(initial.length > 0 ? Math.max(...initial.map(item => item.id)) + 1 : 1);

  // Sync list with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("my_item", JSON.stringify(list));
  }, [list]);

  // Function to add a new item to the list
  function addToList(userInput) {
    if (!userInput.trim()) return;

    const newItem = {
      id: id,
      value: userInput,
      isChecked: false, // Default checked state
    };

    setList((prevList) => [...prevList, newItem]); // Add new item to the list
    setId((prev) => prev + 1); // Increment ID
    setInput(""); // Clear input
  }

  // Function to toggle the checked state of a todo item
  function toggleCheckbox(itemId) {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  }

  // Function to delete an item from the list
  function deleteFromList(itemId) {
    setList((prevList) => prevList.filter((todo) => todo.id !== itemId));
  }

  // Function to edit a todo item
  function editTodo(todo) {
    deleteFromList(todo.id);
    setInput(todo.value);
  }

  return (
    <>
      <div className="flex items-start space-y-3 flex-col p-6 font-poppins h-full">
        {/* Input Section */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="What to do?"
            className="inp"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <i
            onClick={() => addToList(input)}
            className="bi bi-plus-lg text-[#676767] p-2 bg-[#ebfffc] rounded-full cursor-pointer"
          ></i>
        </div>

        {/* Todo List Section */}
        <div className="font-light w-full">
          {list.map((todo) => (
            <div key={todo.id} className="flex items-center space-y-2">
              <div className="flex items-center justify-between w-full">
                <div className="flex space-x-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={todo.isChecked}
                    onChange={() => toggleCheckbox(todo.id)}
                  />
                  {todo.isChecked ? (
                    <del>{todo.value}</del>
                  ) : (
                    <p>{todo.value}</p>
                  )}
                </div>
                <div className="space-x-2">
                  <i
                    className="bi bi-pencil-square text-[#676767]"
                    onClick={() => editTodo(todo)}
                  ></i>
                  <i
                    className="bi bi-trash text-red-500"
                    onClick={() => deleteFromList(todo.id)}
                  ></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoList;
