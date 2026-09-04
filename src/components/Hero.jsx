import React from 'react'

const Hero = () => {
  return (
    <section 
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/wwe_arena_background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: 1
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(9, 9, 11, 0.3) 0%, rgba(9, 9, 11, 0.9) 100%)',
          zIndex: 2
        }}
      />
      <div 
        className="animate-slide-up"
        style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          maxWidth: '800px',
          padding: '20px'
        }}
      >
        <h2 style={{ fontSize: '1.5rem', color: 'var(--electric-blue)', marginBottom: '10px', letterSpacing: '4px' }}>
          Monday Night
        </h2>
        <h1 
          className="neon-text-red"
          style={{ fontSize: '5rem', margin: '0 0 20px 0', lineHeight: 1.1 }}
        >
          RAW
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '40px' }}>
          The most electrifying event in sports entertainment returns. Witness history in the making as champions clash and legends are born.
        </p>
        <button className="btn-primary">
          Get Tickets Now
        </button>
      </div>
    </section>
  )
}

export default Hero
