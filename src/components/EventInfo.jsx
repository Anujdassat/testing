import React from 'react'
import { Calendar, MapPin, Clock } from 'lucide-react'

const EventInfo = () => {
  const cards = [
    {
      icon: <Calendar size={32} color="var(--electric-blue)" />,
      title: "Date",
      detail: "October 15, 2026"
    },
    {
      icon: <Clock size={32} color="var(--neon-red)" />,
      title: "Time",
      detail: "7:00 PM EST"
    },
    {
      icon: <MapPin size={32} color="var(--electric-blue)" />,
      title: "Location",
      detail: "Madison Square Garden, NY"
    }
  ]

  return (
    <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="glass-panel"
            style={{ 
              padding: '30px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ marginBottom: '15px' }}>{card.icon}</div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '10px' }}>{card.title}</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-light)' }}>{card.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EventInfo
