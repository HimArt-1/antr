import { useState } from 'react';
import Splash from './components/Splash';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="App">
      {showSplash ? (
        <Splash onComplete={() => setShowSplash(false)} />
      ) : (
        <Dashboard onLogout={() => setShowSplash(true)} />
      )}
    </div>
  );
}

export default App;
