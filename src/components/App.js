import React from 'react'
import {
   Navbar,
   Container,
   Row,
   Col
 } from 'react-bootstrap'
import Flashcard from '../containers/Flashcard'

const App = _ => (
   <div id="app" style={{height: "100%"}}>
      <Navbar bg="light">
         <Navbar.Brand>Flashcard App</Navbar.Brand>
      </Navbar>
      <div className="d-flex h-100 align-items-start justify-content-center">
         <div className="w-50 mt-4">
            <Flashcard />
         </div>
      </div>
   </div>
)

export default App
