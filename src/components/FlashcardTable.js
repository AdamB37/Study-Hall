import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux"

const FlashcardTable = (props) => {
   const state = useSelector(state => state.flashcardIndex)
   const flashcards = state.flashcards
   return (
      <Table striped bordered hover>
         <thead>
            <tr>
               <th>Question</th>
               <th>Answer</th>
               <th>Actions</th>
            </tr>
         </thead>
         <tbody>
            {flashcards.map((f, i) => {
               return (
                  <tr key={i}>
                     <td>
                        {f.question}
                     </td>
                     <td>
                        {f.answer}
                     </td>
                     <td>
                        <Link to={'/edit/' + f.id}>
                           <FontAwesomeIcon icon={faEdit} />
                        </Link>
                     </td>
                  </tr>
               )
            })}
         </tbody>
      </Table>
   )
}

export default FlashcardTable
