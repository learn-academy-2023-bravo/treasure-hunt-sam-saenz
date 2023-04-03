# 💰 React Treasure Hunt Game

As a developer, you are tasked with creating a treasure hunt game. The user will see a game board on the page and be able to select various squares on the board. Hidden behind one square is a treasure that will win the game and hidden behind another square is a bomb that will lose the game. All other squares will reveal a neutral image. The user will be given a particular number of clicks to find the treasure that will win the game.

### 🤔 Remember

- Pseudocode!!
- Ask clarifying questions

### 📚 User Stories

- As a user, I can see a page with a three by three grid board game with a question mark in each square.
    - Branch named: game-board
    - Import square into App.js, and then call the component.
    - Make a grid
    - Pass state array to Square component
    - Styled square
    
- As a user, when I click on one of the question marks an alert appears with the index position of that question mark in the array.
    - Branch named: index-position
    - Added an onClick to square
    - Added a handleClick method to Square.js
    - Passed index to Square.js and handleClick
    - Added handleGameplay to App.js
    - Passed handleGameplay to Square.js to get the index by means of functional props.

- As a user, when I click on one of the question marks instead of the alert the question mark turns into a tree emoji.
    - Branch named: tree-emoji
    - Made a copy of the board using spread
    - Updated value at a clicked square to be a tree

- As a user, if I select the winning square the question mark will become a treasure emoji and if I select the losing square the question mark will become a bomb emoji.
    - Branch named: treasure-bomb
    - Made a new state for both treasureLocation and bombLocation.
    - Added logic to the handleGameplay function for clicking the treasure and bomb squares.
    - STRETCH GOAL: In order to make sure that the bomb would not be generated in the same location as the treasure, I created a new function that uses a while loop to keep generating bomb locations until it is different from the treasure. This function is called by the bombLocation state function.

- As a user, I can click on a “Play Again” button that will restart the game.
    - Branch called restart-game
    - Added function generateTreasureLocation as a reusable way to generate the location of the treasure.
    - Added function handleRestart that regenerates the entire game, using generateTreasureLocation and generateBombLocation along with the set functions for both of those states.
    - Attatched that function to a button using an onClick.

- As a user, I can see a counter that shows how many guesses I have left. The counter starts at five and decrements one every time I click on a square that is not the treasure nor the bomb.
- As a user, I can see a message informing me that I won the game if I select the square that contains the treasure.
- As a user, I can see a message informing me that I lost the game if I select the square that contains the bomb.
- As a user, I cannot continue to play the game after I win or lose.
- As a user, I can see a message informing me that I lost the game when I run out of turns (the counter reaches zero).

### 🏔 Stretch Goals

- Consider how to handle a situation where the bomb and the treasure are at the same index.

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).
