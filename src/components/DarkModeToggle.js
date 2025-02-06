import './styles.css'

function DarkModeToggle({darkMode, setDarkMode}) {
  const mode = !darkMode ? 'light' : 'dark'
  const dmt = 'dark-mode-toggle'
  return (
    <button
      type="button"
      onClick={() => setDarkMode(!darkMode)}
      className={`${dmt} ${mode}`}
    >
      Toggle {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  )
}

export default DarkModeToggle
