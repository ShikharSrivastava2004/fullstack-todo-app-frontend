import React from 'react';
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ToDo = ({ _id, text, updateMode, deleteToDo }) => {
  const handleDelete = () => {
    deleteToDo(_id); // Pass the _id to the deleteToDo function
  };

  return (
    <div className='todo'>
        <div className='text'>{text}</div>
        <div className='icons'>
            <BiEdit className="icon" onClick={updateMode} />
            <AiFillDelete className="icon" onClick={handleDelete} />
        </div>
    </div>
  );
}


export default ToDo;
