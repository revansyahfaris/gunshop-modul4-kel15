import test from 'node:test'
import assert from 'node:assert/strict'
import selectGuns from './select.js'

const DATA = [
  { name: 'AK-47', type: 'Rifle', price: 899 },
  { name: 'Glock 17', type: 'Pistol', price: 599 },
  { name: 'Desert Eagle', type: 'Pistol', price: 1599 },
]

test('sorts by name ascending by default', () => {
  assert.deepEqual(selectGuns(DATA, {}).map((g) => g.name), ['AK-47', 'Desert Eagle', 'Glock 17'])
})

test('sorts by price descending', () => {
  assert.deepEqual(
    selectGuns(DATA, { key: 'price', asc: false }).map((g) => g.price),
    [1599, 899, 599]
  )
})

test('combines search with type filter', () => {
  assert.deepEqual(
    selectGuns(DATA, { query: 'e', type: 'Pistol' }).map((g) => g.name),
    ['Desert Eagle']
  )
})

test('search is case-insensitive and does not mutate input', () => {
  const first = DATA[0].name
  assert.equal(selectGuns(DATA, { query: 'GLOCK' }).length, 1)
  assert.equal(DATA[0].name, first)
})
