import { useNavigate } from 'react-router-dom';

export default function CustomPage() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container" dir="rtl" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'var(--bg-main)', minHeight: '100vh' }}>
      <div className="card animate-fade-in" style={{ maxWidth: '600px', width: '100%', textAlign: 'center', padding: '4rem 2rem', borderTop: '4px solid var(--primary-gold)' }}>
        <h1 className="text-gold" style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>الواجهة الجديدة ✨</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
          هذه هي مساحة الواجهة الجديدة والمستقلة، تم بناؤها باستخدام التوجيه الخاص (React Router) لضمان أداء سلس وتصميم يتماشى مع فخامة التطبيق. يمكنك هنا وضع أي محتوى مخصص.
        </p>
        <button className="btn-primary" onClick={() => navigate('/')} style={{ width: 'auto', padding: '0.8rem 2rem' }}>
          العودة للرئيسية
        </button>
      </div>
    </div>
  );
}
