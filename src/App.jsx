import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'
import MainNavigation from './shared/components/Navigation/MainNavigation'


function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/places/new" element={<NewPlace />} />
      </Routes>
      </main>
    </Router>
  )
}

export default App
