import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../src/components/home/Home';
import RegisterForm from '../src/components/user/RegisterFrom';
import LoginForm from '../src/components/user/LoginForm';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );

}

export default App;
