const TABS = ['Catalog', 'About', 'Contact']

function Header({ tab, onTab }) {
  return (
    <header className="header">
      <div className="brand">
        <span className="brand-mark">B&amp;B</span>
        <span className="brand-name">Bore &amp; Barrel</span>
      </div>

      <nav className="nav" aria-label="Main">
        {TABS.map((name) => (
          <button
            key={name}
            type="button"
            className={name === tab ? 'nav-link is-active' : 'nav-link'}
            aria-current={name === tab ? 'page' : undefined}
            onClick={() => onTab(name)}
          >
            {name}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header