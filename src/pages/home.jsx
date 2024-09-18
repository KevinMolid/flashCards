import React, { useState, useContext } from "react"
import FlashCard from "../components/flashcard"
import GameContext from '../context/GameContext.jsx'

/* Game data */
import basicColors from "../data/Es-No/basicColors.jsx"
import advancedColors from "../data/Es-No/advancedColors.jsx"

export default function Home() {
    /* Context */
    const { gameData, setGameData, endGame, score, setScore, guesses, setGuesses, currentCard, setCurrentCard } = useContext(GameContext)

    function nextCard() {
        if (currentCard < gameData.length-1){
            setCurrentCard(currentCard => currentCard+1)
        } else {
            endGame()
        }
    }

    function incrementScore() {
        setScore(score => score+1)
    }

    function incrementGuesses() {
        setGuesses(guesses => guesses+1)
    }

    function setGameDataToBasicColors() {
        setGameData(basicColors)
    }

    function setGameDataToAdvancedColors() {
        setGameData(advancedColors)
    }

    return (
        <div>
            {!gameData && (
                <>
                    <h1>Popular</h1>
                    <h2>Spanish to Norwegian</h2>
                    <button className="btn-blank" onClick={setGameDataToBasicColors}>Basic colors</button>
                    <button className="btn-blank" onClick={setGameDataToAdvancedColors}>Advanced colors</button>
                </>
            )}
            {gameData && (
                <>
                    <h1 className="score">Score: {score}/{guesses}</h1>
                        <FlashCard
                        question={gameData[currentCard].question}
                        answer={gameData[currentCard].answer}
                        category="Spanish to Norwegian"
                        incrementScore={incrementScore}
                        incrementGuesses={incrementGuesses}
                        nextCard={nextCard}/>
                </>
            )}
        </div>
    )
}