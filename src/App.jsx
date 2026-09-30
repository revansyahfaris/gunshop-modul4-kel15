import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Catalog from './pages/Catalog.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

function App() {
  const [tab, setTab] = useState('Catalog')
  const [cart, setCart] = useState({})

  function setQty(name, qty) {
    setCart(({ [name]: _drop, ...rest }) => (qty < 1 ? rest : { ...rest, [name]: qty }))
  }

  return (
    <div className="shell">
      <Header tab={tab} onTab={setTab} cart={cart} onQty={setQty} />

      <main className="main">
        {tab === 'Catalog' && <Catalog onAdd={(name) => setCart((c) => ({ ...c, [name]: (c[name] ?? 0) + 1 }))} />}
        {tab === 'About' && <About />}
        {tab === 'Contact' && <Contact />}
      </main>

      <Footer />
    </div>
  )
}

export default App
