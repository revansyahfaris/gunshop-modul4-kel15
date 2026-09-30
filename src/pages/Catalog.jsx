import { useMemo, useState } from 'react'
import GUNS from '../data/guns.js'
import selectGuns from '../data/select.js'
import GunCard from '../components/GunCard.jsx'

const TYPES = ['All', ...new Set(GUNS.map((gun) => gun.type))]
const SORTS = [
  ['name', 'Name'],
  ['price', 'Price'],
]

function Catalog({ onAdd }) {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('All')
  const [sort, setSort] = useState({ key: 'name', asc: true })

  const shown = useMemo(() => selectGuns(GUNS, { query, type, ...sort }), [query, type, sort])

  function toggleSort(key) {
    setSort((s) => ({ key, asc: s.key === key ? !s.asc : true }))
  }

  return (
    <>
      <section className="masthead">
        <h1 className="display">Hardware, by the spec sheet.</h1>
        <p className="lede">
          A small armory of pistols, rifles, and shotguns. Every piece listed with its
          type, caliber, and price — nothing else.
        </p>
      </section>

      <section>
        <div className="list-head">
          <h2>Current stock</h2>
          <span className="count">
            {shown.length} of {GUNS.length} pieces
          </span>
        </div>

        <div className="controls">
          <input
            className="search"
            type="search"
            placeholder="Search by name"
            aria-label="Search by name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            className="filter"
            aria-label="Filter by type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            {TYPES.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <div className="sorts">
            {SORTS.map(([key, label]) => (
              <button
                key={key}
                type="button"
                className={sort.key === key ? 'sort-btn active' : 'sort-btn'}
                aria-pressed={sort.key === key}
                onClick={() => toggleSort(key)}
              >
                {label} {sort.key === key && (sort.asc ? '↑' : '↓')}
              </button>
            ))}
          </div>
        </div>

        {shown.length === 0 ? (
          <p className="empty">Nothing matches that search.</p>
        ) : (
          <ul className="stock">
            {shown.map((gun) => (
              <GunCard key={gun.name} gun={gun} onAdd={onAdd} />
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

export default Catalog
