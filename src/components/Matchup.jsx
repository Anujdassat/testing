import React from 'react'
import { Zap } from 'lucide-react'

const Matchup = () => {
  return (
    <section className="glass-panel animate-fade-in" style={{ padding: '50px 20px', textAlign: 'center', animationDelay: '0.6s' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Main Event</h2>
      <div style={{ width: '60px', height: '4px', background: 'var(--neon-red)', margin: '0 auto 40px auto' }}></div>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
        
        {/* Fighter 1 */}
        <div style={{ flex: '1', minWidth: '250px' }}>
          <h3 className="neon-text-blue" style={{ fontSize: '2rem', margin: '0' }}>Seth "Freakin"</h3>
          <h2 style={{ fontSize: '3rem', margin: '0' }}>Rollins</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>World Heavyweight Champion</p>
        </div>

        {/* VS Indicator */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
          <Zap size={48} color="var(--neon-red)" />
          <span style={{ fontSize: '2rem', fontWeight: '900', fontStyle: 'italic', marginTop: '10px' }}>VS</span>
        </div>

        {/* Fighter 2 */}
        <div style={{ flex: '1', minWidth: '250px' }}>
          <h3 className="neon-text-red" style={{ fontSize: '2rem', margin: '0' }}>The Ring General</h3>
          <h2 style={{ fontSize: '3rem', margin: '0' }}>Gunther</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>Intercontinental Champion</p>
        </div>
        
      </div>
    </section>
  )
}

export default Matchup
