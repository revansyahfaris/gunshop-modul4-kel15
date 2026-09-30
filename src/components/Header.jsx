import InstallButton from './InstallButton.jsx'
import Cart from './Cart.jsx'

const NAV = ['Catalog', 'About', 'Contact']

function Header({ tab, onTab, cart, onQty }) {
  return (
    <header className="header">
      <span className="brand display">Bore &amp; Barrel</span>
      <nav className="nav">
        {NAV.map((item) => (
          <button
            key={item}
            type="button"
            className={tab === item ? 'nav-link active' : 'nav-link'}
            onClick={() => onTab(item)}
          >
            {item}
          </button>
        ))}
        <Cart cart={cart} onQty={onQty} />
        <InstallButton />
      </nav>
    </header>
  )
}

export default Header
