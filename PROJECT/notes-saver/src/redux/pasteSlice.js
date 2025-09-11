import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pastes: localStorage.getItem('pastes')
    ? JSON.parse(localStorage.getItem('pastes'))
    : []
}

export const pasteSlice = createSlice({
  name: 'pastes',
  initialState,
  reducers: {
    addToPastes: (state, action) => {

    },
    updateTOPastes: (state, action) => {

    },
    removeFromPastes: (state, action) => {

    },
    resetAllPastes: (state, action) => {

    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateTOPastes, removeFromPastes, resetAllPastes } = pasteSlice.actions

export default pasteSlice.reducer