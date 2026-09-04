import Hero from './components/Hero'
import EventInfo from './components/EventInfo'
import Matchup from './components/Matchup'
import './index.css'

function App() {
  return (
    <div className="app-container">
      <Hero />
      <div className="content-wrapper" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '60px' }}>
        <EventInfo />
        <Matchup />
      </div>
    </div>
  )
}

export default App
