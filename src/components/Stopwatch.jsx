import { useState, useEffect } from 'react';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    const pad = (num) => num.toString().padStart(2, '0');
    
    if (hours > 0) return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    return `${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <div className="card" style={{ 
      background: 'linear-gradient(135deg, var(--bg-card) 0%, #FAF8F2 100%)',
      borderRight: '4px solid var(--primary-gold)', /* RTL right border */
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
        <span style={{ fontSize: '1.2rem' }}>⏱️</span>
        <h3 style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: 0 }}>المؤقت الرياضي</h3>
      </div>
      
      <div style={{ 
        fontFamily: 'monospace', 
        fontSize: '3.5rem', 
        fontWeight: 'bold', 
        color: 'var(--text-main)',
        letterSpacing: '4px',
        marginBottom: '1.5rem',
        textShadow: '0 2px 10px rgba(197, 160, 89, 0.15)'
      }}>
        {formatTime(time)}
      </div>
      
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button 
          onClick={() => setIsActive(!isActive)} 
          className={isActive ? "btn-outline" : "btn-primary"}
          style={{ width: '100px', padding: '0.6rem 0', borderRadius: '20px' }}
        >
          {isActive ? 'إيقاف' : 'بدء'}
        </button>
        <button 
          onClick={() => { setIsActive(false); setTime(0); }} 
          className="btn-outline"
          style={{ 
            width: '100px', 
            padding: '0.6rem 0', 
            borderColor: 'var(--border-color)', 
            color: 'var(--text-muted)',
            borderRadius: '20px'
          }}
        >
          إعادة
        </button>
      </div>
    </div>
  );
}
