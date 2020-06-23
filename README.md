# code-challenge-minesweeper

The goal of this exercise is to create a version of the classic game of Minesweeper.

## Demo

This a link to a demo of this app: [Minesweeper App](https://panglat.github.io/code-challenge-minesweeper/).

## How to install the app

Once the repository is cloned, it is needed to install the dependencies in the local node_modules folder:

`npm install`

## How to run the app

The following command starts the app:

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Game setup

![GameSetup](docs/images/01_page_setup.png 'Game Setup')

This page sets the board game.

## Board

Once the player sets the game, the boar is shown.

![Board](docs/images/02_board.png 'Game board ready to play')

If the player reveals a bomb, the player loses and the game ends.

![Board](docs/images/03_lost.png 'The player has lost')

If the player reveals all tiles without uncovers a bomb, they win.

![Board](docs/images/04_won.png 'The player has won')

## Reset Game
The player can reset the game clicking 'Reset Game' button

## The game is save!
The game is saved every time the player performs an action. If the player refreshes the page, the last game is loaded. The player can reset the game clicking 'Reset Game' button.
