# code-challenge-minesweeper

The goal of this exercise is to create a version of the classic game of Minesweeper

## How to install the app

Once the repository is cloned, it is needed to install the dependencies in the local node_modules folder:

`npm install`

## How to run the app

The following command starts the app:

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Game setup

![GameSetup](https://panglat.github.io/code-challenge-minesweeper/images/01_page_setup.png 'Game Setup')
This page sets the board game.

## Board

Once the player sets the game, the boar is show.
![Board](https://panglat.github.io/code-challenge-minesweeper/images/02_board.png 'Game board ready to play')

If the player uncovers a bomb, the player loses and the game ends.
![Board](https://panglat.github.io/code-challenge-minesweeper/images/03_lost.png 'The player has lost')

If the player uncovers all tiles without uncovers a bomb, they wins.
![Board](https://panglat.github.io/code-challenge-minesweeper/images/04_won.png 'The player has won')
