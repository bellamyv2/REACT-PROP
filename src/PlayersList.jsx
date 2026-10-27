import Player from './Player.jsx'
import players from './players.js'

function PlayersList() {
  return (
    <section className="container players-section" aria-label="Featured players">
      <div className="row g-4 justify-content-center">
        {players.map((player) => (
          <div className="col-12 col-sm-6 col-lg-3" key={player.name}>
            <Player
              name={player.name}
              team={player.team}
              nationality={player.nationality}
              jerseyNumber={player.jerseyNumber}
              age={player.age}
              image={player.image}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default PlayersList
