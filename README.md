Wordle-like Game in React

Github link: https://github.com/msibrahimhussain/dgymbookAss

Project Overview

This project is a simple implementation of a Wordle-like game using ReactJS. Players have 6 attempts to guess a 5-letter word. After each guess, the app provides color-coded feedback:

Green: Correct letter in the correct position

Yellow: Correct letter in the wrong position

Gray: Incorrect letter

Features

Core Features

Game Logic:

Players have 6 attempts to guess a hidden word.

Real-time color-coded feedback for each guess.

Guess validation to prevent invalid words.

UI/UX:

Responsive grid layout to display previous guesses.

Feedback messages for win or loss conditions.

"New Game" button to restart the game.

State Management:

Handles guessed words, remaining attempts, and game status.

Performance & Code Quality:

Clean, modular, and readable code.

Proper component structure for maintainability.

Additional Features:

Animations for feedback.

Dark mode toggle.

Tech Stack

ReactJS for building user interfaces.

CSS for styling.

Setup Instructions

Clone the repository:

git clone <repository-url>
cd wordle-game

Install dependencies:

npm install

Start the application:

npm start

Open http://localhost:3000 in your browser to view the app.

Component Structure

/src
|-- App.js
|-- components
    |-- DarkModeToggle
    |-- GuessInput.js
    |-- Grid.js.js
    |-- Message.js
|-- styles.css

Component Details

App.js: Manages the state and logic of the game.

Grid.js: Renders the game grid and applies feedback styles.

styles.css: Contains styles for light and dark modes, color-coded feedback, and animations.

How to Play

Enter your 5-letter guess.

Submit the guess and observe the color-coded feedback.

Continue guessing until you win or run out of attempts.

Click the "New Game" button to restart.

Completion Instructions

Requirements Met

Game logic with accurate color-coded feedback.

Proper state management and clean UI.

Responsive layout and dark mode toggle.

No backend required; hardcoded words.


Enjoy playing this simple Wordle-like game!
