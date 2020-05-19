import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { postFlashcard, saveProgress } from '../actions'

const EditFlashcard = (props) => {
   const className = "w-50 mt-4 rounded shadow-lg"
   const style = {

   }

   const state = useSelector(state => state.editFlashcard)
   const dispatch = useDispatch()

   const [flashcard, setFlashcard] = useState(state.flashcard)
   const history = useHistory()

   useEffect(
      () => () => dispatch(saveProgress(flashcard)),
      [flashcard.answer, flashcard.question]
   )

   const onChange = (event, field) => setFlashcard({...flashcard, [field]: event.target.value})
   const redirectToIndexPage = () => history.push('/all')

   console.log('flashcard-----', flashcard)

   // const onChange = (event, field) => flashcard[field] = event.target.value


   return (
      <Card className={className} style={style}>
         <Card.Body>
            <Form>
               <Form.Group>
                  <Form.Label>
                     Question:
                  </Form.Label>
                  <Form.Control
                     placeholder="Do you know about the bird?"
                     value={flashcard.question}
                     onChange={(e) => onChange(e, 'question')}
                  />
               </Form.Group>
               <Form.Group>
                  <Form.Label>
                     Answer:
                  </Form.Label>
                  <Form.Control
                     placeholder="The bird is the word."
                     defaultValue={flashcard.answer}
                     onChange={(e) => onChange(e, 'answer')}
                  />
               </Form.Group>
               <Button variant="primary" onClick={() => dispatch(postFlashcard(flashcard, redirectToIndexPage))}>
                  Submit
               </Button>
            </Form>
         </Card.Body>
      </Card>
   )
}

export default EditFlashcard
