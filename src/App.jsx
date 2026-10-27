import PlayersList from './PlayersList.jsx'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <header className="page-header">
        <p className="eyebrow">ULTIMATE TEAM · 2025/26</p>
        <h1>Legends of the game</h1>
        <p className="subtitle">Four world-class players. One dream squad.</p>
      </header>
      <PlayersList />
    </main>
  )
}

export default App
