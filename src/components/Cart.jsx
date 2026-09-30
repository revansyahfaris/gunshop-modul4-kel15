import { useRef } from 'react'
import GUNS from '../data/guns.js'

const priceOf = (name) => GUNS.find((gun) => gun.name === name)?.price ?? 0

function Cart({ cart, onQty }) {
  const popup = useRef(null)
  const lines = Object.entries(cart)
  const count = lines.reduce((sum, [, qty]) => sum + qty, 0)
  const total = lines.reduce((sum, [name, qty]) => sum + priceOf(name) * qty, 0)

  return (
    <>
      <button
        className="cart-btn"
        type="button"
        onClick={() => popup.current.showModal()}
        aria-label={`Cart, ${count} items`}
      >
        Cart
        {count > 0 && <span className="badge">{count}</span>}
      </button>

      <dialog
        className="popup"
        ref={popup}
        onClick={(e) => e.target === popup.current && popup.current.close()}
      >
        <h3 className="display cart-title">Your cart</h3>

        {lines.length === 0 ? (
          <p>Nothing in it yet.</p>
        ) : (
          <ul className="cart-lines">
            {lines.map(([name, qty]) => (
              <li key={name} className="cart-line">
                <span className="cart-name">{name}</span>
                <span className="qty">
                  <button type="button" onClick={() => onQty(name, qty - 1)} aria-label={`Fewer ${name}`}>
                    −
                  </button>
                  <span>{qty}</span>
                  <button type="button" onClick={() => onQty(name, qty + 1)} aria-label={`More ${name}`}>
                    +
                  </button>
                </span>
                <span className="price">${(priceOf(name) * qty).toLocaleString()}</span>
              </li>
            ))}
          </ul>
        )}

        <p className="cart-total">
          Total <span className="price">${total.toLocaleString()}</span>
        </p>

        <form method="dialog">
          <button className="popup-close">Close</button>
        </form>
      </dialog>
    </>
  )
}

export default Cart
