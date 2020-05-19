import React from 'react'
import {
   Col,
   Container,
   Nav,
   Navbar,
   Row,
 } from 'react-bootstrap'
import { Switch, Route, Link } from 'react-router-dom';
import Flashcard from '../components/Flashcard'
import EditFlashcard from '../components/EditFlashcard'
import FlashcardTable from '../components/FlashcardTable'


const App = _ => (
   <div id="app" style={{height: "100%"}}>
      <Navbar bg="light">
         <Navbar.Brand>Study Hall</Navbar.Brand>
         <Nav.Link as={Link} to="/" >Study</Nav.Link>
         <Nav.Link as={Link} to="/all/test" >View All</Nav.Link>
         <Nav.Link as={Link} to="/new" >Add New</Nav.Link>
      </Navbar>
      <div className="d-flex justify-content-center">
         <Switch>
            <Route key="study" exact path='/'>
               <Flashcard />
            </Route>
            <Route key="all" path='/all'>
               <FlashcardTable />
            </Route>
            <Route key="new" path='/new'>
               <EditFlashcard />
            </Route>
            <Route key="edit" path='/edit/:id'>
               <EditFlashcard />
            </Route>
         </Switch>
      </div>
   </div>
)

export default App
