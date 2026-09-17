import { useNavigate } from 'react-router-dom';

export default function Sidebar({ setView, currentView, onLogout, isOpen, setIsOpen }) {
  const menuItems = [
    { id: 'home', label: 'الرئيسية', icon: '🏠' },
    { id: 'clients', label: 'المتدربين', icon: '👥' },
    { id: 'schedule', label: 'الجدول الزمني', icon: '📅' },
    { id: 'analytics', label: 'الإحصائيات', icon: '📊' },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header" style={{ padding: '0 1.5rem', marginBottom: '2.5rem', textAlign: 'center', position: 'relative' }}>
        <button 
          className="hamburger-btn" 
          onClick={() => setIsOpen(false)} 
          style={{ display: isOpen ? 'block' : 'none', position: 'absolute', left: '10px', top: '10px' }}
        >
          ✕
        </button>
        <img src="/logo.png" alt="InterContinental Logo" style={{ maxWidth: '140px', marginBottom: '10px' }} />
        <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500, letterSpacing: '1px' }}>بوابة المدربين</span>
      </div>
      
      <nav className="sidebar-nav" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '0 1rem' }}>
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            style={{
              padding: '0.9rem 1.2rem',
              background: currentView === item.id ? 'rgba(197, 160, 89, 0.1)' : 'transparent',
              color: currentView === item.id ? 'var(--primary-gold)' : 'var(--text-main)',
              fontWeight: currentView === item.id ? 600 : 400,
              border: 'none',
              borderRadius: '12px',
              textAlign: 'right',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '1rem',
              transition: 'all 0.2s ease-in-out'
            }}
          >
            <span style={{ fontSize: '1.2rem', opacity: currentView === item.id ? 1 : 0.7 }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div style={{ padding: '0 1rem', marginTop: '1rem' }}>
        <button
          onClick={() => navigate('/new-page')}
          style={{
            width: '100%',
            padding: '0.8rem',
            background: 'linear-gradient(135deg, var(--primary-gold), var(--primary-gold-hover))',
            color: '#fff',
            border: 'none',
            borderRadius: '12px',
            textAlign: 'center',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.9rem',
            boxShadow: '0 4px 12px rgba(197, 160, 89, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <span>✨</span> اكتشف الواجهة الجديدة
        </button>
      </div>
    </aside>
  );
}
