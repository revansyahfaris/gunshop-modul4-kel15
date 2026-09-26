import { useEffect, useState } from 'react'

function InstallButton() {
  const [prompt, setPrompt] = useState(null)

  useEffect(() => {
    function onPrompt(e) {
      e.preventDefault()
      setPrompt(e)
    }

    function onInstalled() {
      setPrompt(null)
    }

    window.addEventListener('beforeinstallprompt', onPrompt)
    window.addEventListener('appinstalled', onInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  if (!prompt) return null

  async function install() {
    prompt.prompt()
    await prompt.userChoice
    setPrompt(null)
  }

  return (
    <button className="install-btn" type="button" onClick={install}>
      Install app
    </button>
  )
}

export default InstallButton