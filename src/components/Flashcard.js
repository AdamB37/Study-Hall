import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import { useDispatch, useSelector } from "react-redux"
import { revealAnswer, nextQuestion, restart } from '../actions'


const Flashcard = (props) => {
   const state = useSelector(state => state.studyFlashcards)
   const dispatch = useDispatch()
   console.log('studyFlashcards state',state)
   const {showAnswer, flashcards, index} = state
   const visibleFlashcard = flashcards[index]
   const lastCard = flashcards.length - 1 === index
   if(!visibleFlashcard) {
      return (
         <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
         </Spinner>
      )
   }
   const { question, answer } = visibleFlashcard
   let onClick, buttonText

   if(showAnswer) {
      onClick = lastCard ? restart : nextQuestion
      buttonText = lastCard ? "Restart App" : "Next Question"
   } else {
      onClick = revealAnswer
      buttonText = "Show Answer"
   }

   const className = "w-50 mt-4 text-center rounded shadow-lg"
   return (
      <Card className={className}>
         <Card.Header>
            <Card.Title>
               {showAnswer ? "Answer" : "Question"}
            </Card.Title>
         </Card.Header>
         <Card.Body>
            <Card.Text>
               {showAnswer ? answer : question}
            </Card.Text>
            <Button variant="primary" onClick={() => dispatch(onClick)}>
               {buttonText}
            </Button>
         </Card.Body>
      </Card>
   )
}

export default Flashcard
