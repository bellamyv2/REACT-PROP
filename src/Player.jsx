function Player({
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  image,
}) {
  const cardStyle = {
    background: 'linear-gradient(155deg, #f8e6a3 0%, #d2a84d 100%)',
    border: '1px solid rgba(255, 255, 255, 0.65)',
    borderRadius: '1rem',
    boxShadow: '0 1rem 2rem rgba(10, 18, 12, 0.25)',
    color: '#18251b',
    overflow: 'hidden',
  }

  return (
    <article className="card player-card h-100" style={cardStyle}>
      <div className="player-image-wrap">
        <img className="card-img-top player-image" src={image} alt={name} />
        <span className="player-number">{jerseyNumber}</span>
      </div>
      <div className="card-body d-flex flex-column">
        <p className="player-label mb-1">PLAYER</p>
        <h2 className="card-title player-name">{name}</h2>
        <p className="player-team mb-3">{team}</p>
        <div className="player-details mt-auto">
          <div>
            <span className="detail-label">NATIONALITY</span>
            <span className="detail-value">{nationality}</span>
          </div>
          <div>
            <span className="detail-label">AGE</span>
            <span className="detail-value">{age}</span>
          </div>
          <div>
            <span className="detail-label">JERSEY</span>
            <span className="detail-value">#{jerseyNumber}</span>
          </div>
        </div>
      </div>
    </article>
  )
}

Player.defaultProps = {
  name: 'Unknown Player',
  team: 'Free Agent',
  nationality: 'Unknown',
  jerseyNumber: 0,
  age: 0,
  image: 'https://placehold.co/600x700/24352a/f8e6a3?text=Player',
}

export default Player
