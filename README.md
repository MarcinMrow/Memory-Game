# FEND Memory Game Project

- It is a real-life and complete browser-based card matching game. 
- Created for [**Front-End Web Developer Nanodegree Program**](https://eu.udacity.com/)

## How The Game Works

- it consists of sixteen "cards" arranged in a grid 
- the deck is made up of eight different pairs of cards, each with different symbols on one side
- the cards are arranged randomly on the grid with the symbol face down 
- the gameplay rules: flip over two hidden cards at a time to locate the ones that match

Each turn:

- the player flips one card over to reveal its underlying symbol
- the player then turns over a second card, trying to find the corresponding card with the same symbol
- if the cards match, both cards stay flipped over
- if the cards do not match, both cards are flipped face down
- the game ends once all cards have been correctly matched

## Game logic

- the game randomly shuffles the cards
- user wins once all cards have successfully been matched

## Game Functionality

1. **Shuffle Cards** - when game is loaded and/or restarted.
2. **Matching & Unmatching Cards** - game recognizes when cards match or do not match.
3. **Congratulations Popup** - when a user wins the game, a success modal appears to congratulate the player, shows statistics and ask if they want to play again.
4. **Restart Button** -  allows the player to reset the game board, the timer, and the star rating.
5. **Star Rating** - the game displays a star rating (from 1-3) that reflects the player's performance.
6. **Timer** - when the player starts a game, a displayed timer should also start; once the player wins the game, the timer stops.
7. **Moves Counter** - game displays the current number of moves a user has made.

## Play the Memory Game

[Click here to play a game.](https://marcinmrow.github.io/Memory-Game/)

## Interface design

Application components are usable across desktop, tablet and phone browsers.

## Dependencies

1. Memory Game has been created as the Udacity Project and based on the **starters code**.
2. **JavaScript**: [JS Tutorial](https://www.w3schools.com/js/default.asp).
3. **CSS**: [CSS Almanac](https://css-tricks.com/almanac/).
4. **GIT**: [Writing on GitHub](https://help.github.com/articles/basic-writing-and-formatting-syntax/#links).
5. **Style Guidelines**: [Udacity Frontend Nanodegree Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html).

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. 

You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).




