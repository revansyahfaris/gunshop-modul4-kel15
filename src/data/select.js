// Filter by name substring + type, then sort by name or price.
export default function selectGuns(guns, { query = '', type = 'All', key = 'name', asc = true }) {
  const q = query.trim().toLowerCase()
  return guns
    .filter((g) => (type === 'All' || g.type === type) && g.name.toLowerCase().includes(q))
    .sort((a, b) => {
      const d = key === 'price' ? a.price - b.price : a.name.localeCompare(b.name)
      return asc ? d : -d
    })
}
