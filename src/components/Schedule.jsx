const mockSchedule = [
  { id: 1, time: '08:00 ص', client: 'سالم محمد', type: 'تدريب شخصي', status: 'completed' },
  { id: 2, time: '10:30 ص', client: 'فهد سعود', type: 'تقييم بدني', status: 'upcoming' },
  { id: 3, time: '04:00 م', client: 'أحمد عبدالله', type: 'تدريب شخصي', status: 'upcoming' },
  { id: 4, time: '07:15 م', client: 'تمارين جماعية', type: 'كلاس', status: 'upcoming' },
];

export default function Schedule() {
  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h2 className="page-title">الجدول الزمني لليوم</h2>
        <button className="btn-primary" style={{ width: 'auto' }}>+ موعد جديد</button>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
          <thead>
            <tr style={{ background: 'var(--bg-dark)', color: 'var(--text-muted)' }}>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>الوقت</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>المتدرب / النشاط</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>النوع</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>الحالة</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {mockSchedule.map((item, idx) => (
              <tr key={item.id} style={{ borderTop: '1px solid var(--border-color)', transition: 'background 0.2s' }} className={`delay-${(idx % 4) * 100} animate-fade-in`}>
                <td style={{ padding: '1.2rem 1.5rem', fontWeight: 600, color: 'var(--primary-gold)' }}>{item.time}</td>
                <td style={{ padding: '1.2rem 1.5rem' }}>{item.client}</td>
                <td style={{ padding: '1.2rem 1.5rem' }}>
                  <span style={{ 
                    padding: '0.3rem 0.8rem', 
                    background: 'rgba(255,255,255,0.05)', 
                    borderRadius: '20px', 
                    fontSize: '0.85rem' 
                  }}>
                    {item.type}
                  </span>
                </td>
                <td style={{ padding: '1.2rem 1.5rem' }}>
                  <span style={{ 
                    color: item.status === 'completed' ? 'var(--success)' : 'var(--warning)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <span style={{ 
                      width: '8px', 
                      height: '8px', 
                      borderRadius: '50%', 
                      background: 'currentColor'
                    }}></span>
                    {item.status === 'completed' ? 'مكتمل' : 'قادم'}
                  </span>
                </td>
                <td style={{ padding: '1.2rem 1.5rem' }}>
                  <button className="btn-outline" style={{ padding: '0.3rem 0.8rem', fontSize: '0.85rem' }}>تعديل</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
