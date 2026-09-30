import { useEffect, useState } from 'react'

const KEY = 'bb-favorites'

function read() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) ?? []
  } catch {
    return []
  }
}

function useFavorites() {
  const [favorites, setFavorites] = useState(read)

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(favorites))
  }, [favorites])

  function toggle(name) {
    setFavorites((list) =>
      list.includes(name) ? list.filter((n) => n !== name) : [...list, name]
    )
  }

  return { favorites, toggle }
}

export default useFavorites