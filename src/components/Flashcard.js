import React from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'


const Flashcard = ({showAnswer, visibleFlashcard, lastCard, clickHandlers}) => {
   if(!visibleFlashcard) {
      return (
         <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
         </Spinner>
      )
   }
   let { revealAnswer, nextQuestion, restart } = clickHandlers
   let { question, answer } = visibleFlashcard
   let onClick, buttonText

   if(showAnswer) {
      onClick = lastCard ? restart : nextQuestion
      buttonText = lastCard ? "Restart App" : "Next Question"
   } else {
      onClick = revealAnswer
      buttonText = "Show Answer"
   }
   return (
      <Card className="text-center">
         <Card.Header>
            <Card.Title>
               {showAnswer ? "Answer" : "Question"}
            </Card.Title>
         </Card.Header>
         <Card.Body>
            <Card.Text>
               {showAnswer ? answer : question}
            </Card.Text>
            <Button variant="primary" onClick={onClick}>
               {buttonText}
            </Button>
         </Card.Body>
      </Card>
   )
}

export default Flashcard
