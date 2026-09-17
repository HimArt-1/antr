import { useState } from 'react';

const mockClients = [
  { id: 1, name: 'أحمد عبدالله', plan: 'تضخيم عضلي', status: 'active', lastSeen: 'اليوم', progress: 85 },
  { id: 2, name: 'سالم محمد', plan: 'خسارة وزن', status: 'active', lastSeen: 'أمس', progress: 60 },
  { id: 3, name: 'خالد عبدالعزيز', plan: 'لياقة بدنية', status: 'inactive', lastSeen: 'قبل أسبوع', progress: 30 },
  { id: 4, name: 'فهد سعود', plan: 'تأهيل رياضي', status: 'active', lastSeen: 'منذ ساعتين', progress: 45 },
];

export default function ClientList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = mockClients.filter(c => c.name.includes(searchTerm));

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h2 className="page-title">إدارة المتدربين</h2>
        <button className="btn-primary" style={{ width: 'auto' }}>+ متدرب جديد</button>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <input 
          type="text" 
          className="input-field" 
          placeholder="بحث عن متدرب..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ maxWidth: '400px' }}
        />
      </div>

      <div className="grid-3">
        {filtered.map((client, i) => (
          <div key={client.id} className={`card delay-${(i % 3) * 100} animate-fade-in`}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{client.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '4px 0 0' }}>{client.plan}</p>
              </div>
              <span style={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                backgroundColor: client.status === 'active' ? 'var(--success)' : 'var(--error)' 
              }}></span>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '4px' }}>
                <span>التقدم</span>
                <span className="text-gold">{client.progress}%</span>
              </div>
              <div style={{ height: '6px', background: 'var(--bg-dark)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${client.progress}%`, background: 'var(--primary-gold)' }}></div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>آخر ظهور: {client.lastSeen}</span>
              <button className="btn-outline" style={{ padding: '0.2rem 0.6rem', fontSize: '0.8rem' }}>التفاصيل</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
