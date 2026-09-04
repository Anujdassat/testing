import React from 'react'
import { Calendar, MapPin, Clock } from 'lucide-react'

const EventInfo = () => {
  const cards = [
    {
      icon: <Calendar size={40} color="var(--electric-blue)" />,
      title: "DATE",
      detail: "OCT 15, 2026",
      videoId: "h4UqMyldS7Q" // Example WWE video
    },
    {
      icon: <Clock size={40} color="var(--neon-red)" />,
      title: "TIME",
      detail: "7:00 PM EST",
      videoId: "Pj1zM65XhEQ" // Example WWE video
    },
    {
      icon: <MapPin size={40} color="var(--electric-blue)" />,
      title: "LOCATION",
      detail: "MSG, NEW YORK",
      videoId: "Lw5G8bL1K6g" // Example WWE video
    }
  ]

  return (
    <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', padding: '0 20px' }}>
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="wwe-video-card"
            style={{ 
              position: 'relative',
              height: '280px',
              overflow: 'hidden',
              borderRadius: '12px',
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              background: '#111'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
              e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.8), 0 0 30px ${index % 2 === 0 ? 'var(--electric-blue)' : 'var(--neon-red)'}40`;
              e.currentTarget.style.border = `2px solid ${index % 2 === 0 ? 'var(--electric-blue)' : 'var(--neon-red)'}`;
              e.currentTarget.querySelector('.video-overlay').style.opacity = '0.4';
              e.currentTarget.querySelector('.card-content').style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5)';
              e.currentTarget.style.border = '2px solid rgba(255, 255, 255, 0.1)';
              e.currentTarget.querySelector('.video-overlay').style.opacity = '0.7';
              e.currentTarget.querySelector('.card-content').style.transform = 'scale(1)';
            }}
          >
            {/* Background Video using YouTube iframe */}
            <iframe 
              src={`https://www.youtube.com/embed/${card.videoId}?autoplay=1&mute=1&loop=1&controls=0&playlist=${card.videoId}&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '150%', // Make it larger to hide borders/watermarks
                height: '150%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none', // Important: prevents video from intercepting hovers/clicks
                zIndex: 0,
                filter: 'contrast(1.2) saturation(1.2)'
              }}
              frameBorder="0" 
              allow="autoplay; encrypted-media" 
              tabIndex="-1"
            />
            
            {/* Dark gradient overlay so text remains readable */}
            <div 
              className="video-overlay"
              style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.9) 100%)',
                zIndex: 1,
                transition: 'opacity 0.4s ease',
                opacity: 0.7
              }} 
            />

            {/* Foreground Content */}
            <div 
              className="card-content"
              style={{ 
                position: 'relative', 
                zIndex: 2, 
                padding: '20px', 
                width: '100%',
                transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
            >
              <div style={{ 
                marginBottom: '15px', 
                display: 'flex', 
                justifyContent: 'center',
                filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
              }}>
                {card.icon}
              </div>
              <h3 style={{ 
                fontSize: '1.6rem', 
                color: '#fff', 
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '4px',
                fontFamily: '"Impact", "Arial Black", sans-serif',
                textShadow: '3px 3px 6px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.5)',
                margin: 0
              }}>
                {card.title}
              </h3>
              <p style={{ 
                fontSize: '1.4rem', 
                fontWeight: '900', 
                color: '#fff',
                textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 15px rgba(255,255,255,0.2)',
                textTransform: 'uppercase',
                margin: 0,
                marginTop: '10px'
              }}>
                {card.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EventInfo
