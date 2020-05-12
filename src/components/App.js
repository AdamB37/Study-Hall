import React from 'react'
import {
   Col,
   Container,
   Nav,
   Navbar,
   Row,
 } from 'react-bootstrap'
import { Switch, Route, Link } from 'react-router-dom';
import Flashcard from '../containers/Flashcard'
import FlashcardTable from '../containers/FlashcardTable'

const App = _ => (
   <div id="app" style={{height: "100%"}}>
      <Navbar bg="light">
         <Navbar.Brand>Study Hall</Navbar.Brand>
         <Nav.Link as={Link} to="/" >Play</Nav.Link>
         <Nav.Link as={Link} to="/all/test" >View All</Nav.Link>
         <Nav.Link as={Link} to="/new" >Add New</Nav.Link>
      </Navbar>
      <Switch>
         <Route key="play" exact path='/'>
            <div className="d-flex h-100 align-items-start justify-content-center">
               <div className="w-50 mt-4">
                  <Flashcard />
               </div>
            </div>
         </Route>
         <Route key="all" path='/all/:foo'>
            <FlashcardTable />
         </Route>
         <Route key="new" path='/new'>
            <p>same component (new)</p>
         </Route>
         <Route key="edit" path='/edit/:id'>
            <p>same component (edit)</p>
         </Route>
      </Switch>
   </div>
)

export default App
