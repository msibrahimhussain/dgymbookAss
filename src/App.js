import {useState} from 'react'
import Grid from './components/Grid'
import GuessInput from './components/GuessInput'
import Message from './components/Message'
import DarkModeToggle from './components/DarkModeToggle'
import './components/styles.css'

const WORD_TO_GUESS = 'REACT'
const MAX_ATTEMPTS = 6

function App() {
  const [guesses, setGuesses] = useState([])
  const [message, setMessage] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  const handleGuessSubmit = guess => {
    if (guesses.length >= MAX_ATTEMPTS || message) return

    setGuesses([...guesses, guess])

    if (guess === WORD_TO_GUESS) {
      setMessage('Congratulations! You guessed the word.')
    } else if (guesses.length + 1 === MAX_ATTEMPTS) {
      setMessage(`Game Over. The correct word was: ${WORD_TO_GUESS}`)
    }
  }

  const handleNewGame = () => {
    setGuesses([])
    setMessage(null)
  }

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <h1>Word Guessing Game</h1>
      <Grid guesses={guesses} targetWord={WORD_TO_GUESS} />
      <GuessInput onGuessSubmit={handleGuessSubmit} disabled={!!message} />
      {message && <Message text={message} />}
      <button type="button" onClick={handleNewGame} className="new-game-btn">
        New Game
      </button>
    </div>
  )
}

export default App
