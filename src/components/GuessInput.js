import {useState} from 'react'
import './styles.css'

function GuessInput({onGuessSubmit, disabled}) {
  const [inputValue, setInputValue] = useState('')

  const handleChange = e => {
    setInputValue(e.target.value.toUpperCase().slice(0, 5))
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (inputValue.length === 5) {
      onGuessSubmit(inputValue)
      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-form">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        disabled={disabled}
        placeholder="Enter guess"
        className="guess-input"
      />
      <button type="submit" disabled={disabled} className="submit-btn">
        Submit
      </button>
    </form>
  )
}

export default GuessInput
