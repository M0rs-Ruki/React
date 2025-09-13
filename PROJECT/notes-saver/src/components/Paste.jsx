import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'


function Paste() {

  const pastes = useSelector(state => state.pastes);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  
  const filteredData = pastes.filter(
    (paste) => paste.title
    .toLowerCase()
    .includes(search.toLowerCase())
  );

  return (
    <div>

    </div>
  )
}

export default Paste