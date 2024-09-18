import React, { createContext, useState } from 'react'

const GameContext = createContext()

export const GameProvider = ({ children }) => {
    const [gameData, setGameData] = useState("")
    const [gameState, setGameState] = useState("start")
    const [score, setScore] = useState(0)
    const [guesses, setGuesses] = useState(0)
    const [currentCard, setCurrentCard] = useState(0)

    const resetGame = () => {
        setScore(0)
        setGuesses(0)
        setCurrentCard(0)
        setGameState("start")
    }

    const startGame = () => setGameState("playing")
    const endGame = () => setGameState("end")

    const quitGame = () => {
        resetGame()
        setGameData("")
    }

    return (
        <GameContext.Provider value={{ gameData, setGameData,
            gameState,
            score, setScore,
            guesses, setGuesses,
            currentCard, setCurrentCard,
            resetGame, startGame, endGame, quitGame }}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContext