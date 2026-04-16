
import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/view/1" element={<view />} />
          <Route path="/edit/1" element={<edit />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App