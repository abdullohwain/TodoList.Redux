import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../files/todos/todoSlice';


function AddTodo() {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let inputValue = inputRef.current.value.trim();

    if (inputValue) {
      dispatch(addTodo(inputValue));
    }

    inputRef.current.value = "";
  };

  return (
    <div className="container flex justify-center mb-10">
      <form onSubmit={handleSubmit} className="w-full max-w-[400px] flex gap-2"> 
          <input
            className="grow input"
            autoFocus={true}
            ref={inputRef} 
            type="text"
            placeholder="Todo text..." 
            autoComplete="off"
            required
          />
        <button className="text-xl btn bg-blue-600" type="submit">
          Qo'shish
        </button>
      </form>
    </div>
  )
}

export default AddTodo;