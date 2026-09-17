import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from './components/Splash';
import Dashboard from './components/Dashboard';
import CustomPage from './components/CustomPage';
import './App.css';

function MainApp() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <Splash onComplete={() => setShowSplash(false)} />;
  }
  return <Dashboard onLogout={() => setShowSplash(true)} />;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/new-page" element={<CustomPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
