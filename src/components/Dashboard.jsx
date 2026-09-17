import { useState } from 'react';
import Sidebar from './Sidebar';
import ClientList from './ClientList';
import Schedule from './Schedule';
import Stopwatch from './Stopwatch';

// Main Home view for the trainer
function HomeView() {
  return (
    <div className="animate-fade-in">
      <div className="page-header" style={{ marginBottom: '1rem' }}>
        <h2 className="page-title">مرحباً بك، كابتن! 🥇</h2>
      </div>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
        استعد ليوم مليء بالطاقة والنشاط. إليك نظرة سريعة على أدواتك:
      </p>
      
      <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
        <Stopwatch />
        
        <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ color: 'var(--text-muted)', fontSize: '1rem', margin: 0 }}>الحصص القادمة</h3>
            <span style={{ padding: '0.2rem 0.6rem', background: 'rgba(197, 160, 89, 0.1)', color: 'var(--primary-gold)', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold' }}>اليوم</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '3px', height: '40px', background: 'var(--primary-gold)', borderRadius: '2px' }}></div>
            <div>
              <p style={{ fontWeight: 'bold', fontSize: '1.1rem', margin: 0 }}>سالم محمد - تدريب شخصي</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>08:00 ص - الصالة الرئيسية</p>
            </div>
          </div>
        </div>

        <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--primary-gold)', color: '#fff', border: 'none' }}>
          <h3 style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', margin: '0 0 0.5rem 0' }}>اقتباس اليوم 💡</h3>
          <p style={{ fontSize: '1.2rem', fontWeight: 600, margin: 0, lineHeight: 1.4 }}>
            "لا تتوقف عندما تتعب، توقف عندما تنتهي."
          </p>
        </div>
      </div>
    </div>
  );
}

// Mock Analytics component
function Analytics() {
  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h2 className="page-title">الإحصائيات والأداء</h2>
      </div>
      <div className="grid-3">
        <div className="card">
          <h3 style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '0.5rem' }}>إجمالي المتدربين</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary-gold)' }}>42</p>
        </div>
        <div className="card">
          <h3 style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '0.5rem' }}>حصص هذا الأسبوع</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary-gold)' }}>18</p>
        </div>
        <div className="card">
          <h3 style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '0.5rem' }}>التقييم العام</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary-gold)' }}>4.9/5</p>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard({ onLogout }) {
  const [view, setView] = useState('home');

  const renderContent = () => {
    switch(view) {
      case 'home': return <HomeView />;
      case 'clients': return <ClientList />;
      case 'schedule': return <Schedule />;
      case 'analytics': return <Analytics />;
      default: return <HomeView />;
    }
  };

  return (
    <div className="dashboard-container" dir="rtl">
      <Sidebar currentView={view} setView={setView} onLogout={onLogout} />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}
