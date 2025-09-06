import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // <-- Add this import
import './index.css';
import App from './App.tsx';
import About from './pages/About.tsx';
import Projects from './pages/Projects.tsx';  
import { ThemeProvider } from './context/ThemeContext';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
  
);