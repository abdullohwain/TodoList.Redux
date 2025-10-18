import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, changeDone } from "../files/todos/todoSlice";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

function TodoList() {
  const todos = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl text-center mb-4 text-black">Todo List</h2>

      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition-all px-4 py-2 rounded-lg"
          >
            <span
              className={`text-gray-700 ${todo.done ? "line-through text-gray-400" : ""}`}
            >
              {todo.text}
            </span>
            <div>
              <button
                onClick={() => dispatch(changeDone(todo.id))}
                type="button"
                className="p-2 rounded-md bg-blue-400 hover:bg-blue-600 text-black transition"
              >
                <FaPencilAlt />
              </button>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                type="button"
                className="p-2 rounded-md bg-red-300 hover:bg-red-500 text-black transition"
              >
                <RiDeleteBin6Fill />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
