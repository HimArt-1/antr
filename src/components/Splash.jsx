import { useEffect, useState } from 'react';
import './Splash.css';

export default function Splash({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start exit animation after 2 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2000);

    // Call onComplete after exit animation finishes (2.8 seconds total)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`splash-container ${isExiting ? 'fade-out' : ''}`}>
      <div className="splash-content">
        <img src="/logo.png" alt="InterContinental Logo" className="splash-logo" />
        <div className="splash-loading-bar">
          <div className="splash-progress"></div>
        </div>
      </div>
    </div>
  );
}
