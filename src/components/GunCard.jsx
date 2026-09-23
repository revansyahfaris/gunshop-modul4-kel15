function GunCard({ gun }) {
  return (
    <li className="card">
      <img className="card-image" src={gun.image} alt={gun.name} width="96" height="96" />

      <div className="card-body">
        <div className="card-head">
          <h3 className="card-name">{gun.name}</h3>
          <p className="card-price">${gun.price.toLocaleString('en-US')}</p>
        </div>

        <dl className="specs">
          <div className="spec">
            <dt>Type</dt>
            <dd>{gun.type}</dd>
          </div>
          <div className="spec">
            <dt>Caliber</dt>
            <dd>{gun.caliber}</dd>
          </div>
        </dl>

        <p className="card-text">{gun.description}</p>
      </div>
    </li>
  )
}

export default GunCard