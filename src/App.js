import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const generateTreasureLocation = () => {
    return Math.floor(Math.random() * board.length)
  }

  const generateBombLocation = () => {
    let bombStart = treasureLocation
    while(bombStart === treasureLocation) {
      bombStart = Math.floor(Math.random() * board.length)
    }
    return bombStart
  }

  const [treasureLocation, setTreasureLocation] = useState(generateTreasureLocation)

  const [bombLocation, setBombLocation] = useState(generateBombLocation)

  const handleRestart = () => {
    let updateBoard = board.map(value => "?")
    setTreasureLocation(Math.floor(Math.random() * board.length))
    setBombLocation(generateBombLocation)
    setBoard(updateBoard)
  }

  const handleGameplay = (clickedSquare) => {
    let updateBoard = [...board]
    if(clickedSquare === treasureLocation) {
      updateBoard[clickedSquare] = "👑"
      setBoard(updateBoard)
    } else if(clickedSquare === bombLocation) {
      updateBoard[clickedSquare] = "💣"
      setBoard(updateBoard)
    } else {
      updateBoard[clickedSquare] = "🌴"
      setBoard(updateBoard)
    }
    
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
      {
        board.map((square, index) => {
          return <Square 
            square={square} 
            index={index} 
            key={index}
            handleGameplay={handleGameplay}
            />
        })
      }
      </div>
      <button className="restart-button" onClick={handleRestart}>Reset Game</button>
    </>
  )
}

export default App
