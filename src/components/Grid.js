import './styles.css'

function Grid({guesses, targetWord}) {
  const renderRow = (guess, rowIndex) => (
    <div key={`row-${rowIndex}`} className="grid-row">
      {Array.from(targetWord).map((_, colIndex) => {
        const letter = guess[colIndex] || ''
        let className = 'grid-cell'
        if (letter) {
          if (letter === targetWord[colIndex]) {
            className += ' correct'
          } else if (targetWord.includes(letter)) {
            className += ' partial'
          } else {
            className += ' wrong'
          }
        }
        return (
          <div key={`cell-${rowIndex + colIndex}`} className={className}>
            {letter}
          </div>
        )
      })}
    </div>
  )

  return (
    <div className="grid-container">
      {Array.from({length: 6}).map((_, rowIndex) =>
        renderRow(guesses[rowIndex] || '', rowIndex),
      )}
    </div>
  )
}

export default Grid

/*
import React from 'react'
import './styles.css'

function Grid({guesses, targetWord}) {
  const renderRow = (guess, rowIndex) => (
    <div key={`row-${rowIndex}`} className="grid-row">
      {Array.from(targetWord).map((_, colIndex) => {
        const letter = guess[colIndex] || ''
        let className = 'grid-cell'
        if (letter) {
          if (letter === targetWord[colIndex]) {
            className += ' correct'
          } else if (targetWord.includes(letter)) {
            className += ' partial'
          } else {
            className += ' wrong'
          }
        }
        return (
          <div key={`cell-${rowIndex + colIndex}`} className={className}>
            {letter}
          </div>
        )
      })}
    </div>
  )

  return (
    <div className="grid-container">
      {Array.from({length: 6}).map((_, rowIndex) =>
        renderRow(guesses[rowIndex] || '', rowIndex),
      )}
    </div>
  )
}

export default Grid
*/
