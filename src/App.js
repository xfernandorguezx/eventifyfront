import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import User from './User'; 

function App() {
  return (
    <Router>
      <div>
        <h1>Usuarios</h1>
        <Routes>
          {/* Redirigir la ruta raíz "/" a "/users" */}
          <Route path="/" element={<Navigate to="/users" />} />
          <Route path="/users" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
