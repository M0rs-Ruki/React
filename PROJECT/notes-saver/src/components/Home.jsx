import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToPastes, updateTOPastes } from '../redux/pasteSlice.js';

function Home() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get('pasteId');
  const dispatch = useDispatch();


  const createPaste = () => {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };
    if (pasteId) {
      // Update existing paste
      dispatch(updateTOPastes(paste))
    } else {
      // Create new paste
      dispatch(addToPastes(paste))
    }
    // Reset form fields
    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div>
      <div className='flex flex-row  gap-4 place-content-between'>
        <input
          className='p-2 m-2 pl-4 bg-slate-700 text-white rounded w-[60%]'
          type='text'
          placeholder='Enter Title here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className='p-2 m-2 bg-slate-700 text-white rounded'
          onClick={createPaste}
        >
          {pasteId ? "Update Paste" : "Create Paste"}
        </button>
      </div>
      <div className='flex flex-row  gap-4'>
        <textarea
          className='p-2 m-2 bg-slate-700 text-white rounded'
          value={value}
          placeholder='Enter Content here'
          onChange={(e) => setValue(e.target.value)}
          rows={10}
          cols={50}
        />
      </div>
    </div>
  );
};

export default Home