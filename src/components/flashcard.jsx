import { React, useState, useContext } from "react"
import GameContext from '../context/GameContext.jsx'

export default function FlashCard(props) {
    const [cardStatus, setCardStatus] = useState('normal')
    const [guess, setGuess] = useState('')
    const [isSubmitted, setIsSubmitted] = useState('')
    const [bottomText, setBottomText] = useState('')

    /* Context */
    const { gameState, resetGame, startGame, quitGame, score, guesses } = useContext(GameContext)

    function handleChange(event) {
        setGuess(event.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setIsSubmitted('submitted')
        if (guess.toLowerCase() === props.answer) {
            /* Right answer */
            setCardStatus('right')
            setBottomText('Correct!')
            props.incrementScore()
        } else {
            /* Wrong answer */
            setCardStatus('wrong')
            setBottomText('Wrong! The right answer was ' + props.answer.toUpperCase())

        }
        props.incrementGuesses()
    }


    function next() {
        props.nextCard()
        setIsSubmitted('')
        setCardStatus('')
        setGuess('')
        setBottomText('')
    }

    return (
        <div className={cardStatus + " flashcard"}>
            {/* Left panel */}
            <div className="flashcard--left"></div>

            {/* Main panel */}
            <div className="flashcard--main">
            <p className="flashcard--theme">{props.category}</p>

            {/* Game start (Before playing) */}
            {gameState === "start" && (
                <button 
                    onClick={startGame}
                    className="btn-blank btn-big">Start Game</button>
            )}

            {/* Game active (Playing) */}
            {gameState === "playing" && (
                <>
                    <h1 className="flashcard--question">{props.question}</h1>
                    <form onSubmit={handleSubmit}>
                        <input className="flashcard--input"
                            type="text" 
                            value={guess} 
                            onChange={handleChange}
                            disabled={isSubmitted}></input>
                    </form>
                    <p className="flashcard--bottom-txt">{bottomText}</p>
                </>
            )}

            {/* Game end (After playing) */}
            {gameState === "end" && (
                <>
                    <h1>Genius!</h1>
                    <h2>You got {score}/{guesses} right!</h2>
                    <button onClick={resetGame}>Play again</button>
                    <button onClick={quitGame}>Quit game</button>
                </>)}
            </div>

            {/* Right panel */}
            <div className="flashcard--right">
                <button className={"btn-blank " + (isSubmitted ? "block" : "invisible")} 
                    onClick={next} 
                    disabled={!isSubmitted}>
                    <i className="fa-solid fa-chevron-right flashcard--next"></i> 
                </button>
           </div>
        </div>
    )
}