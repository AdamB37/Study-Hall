import React from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


const Flashcard = ({showAnswer, visibleFlashcard, lastCard, clickHandlers}) => {
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
