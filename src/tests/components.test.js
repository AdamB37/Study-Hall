import React from 'react'
import {fireEvent, render} from '@testing-library/react';
import Flashcard from '../containers/Flashcard'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers'

const store = createStore(rootReducer)
let r
describe('components', () => {
   beforeEach(() => {
      r = render(
         <Provider store={store}>
            <Flashcard/>
         </Provider>
      )
   })

   it('should show initialize the app with the first question?', () => {
      expect(r.queryByText("Question")).toBeTruthy()
      expect(r.queryByText("Show Answer")).toBeTruthy()
   })

   it('should show "Next Question" button after clicking "Show Answer button"', () => {
      fireEvent.click(r.queryByText('Show Answer'))
      expect(r.queryByText('Next Question')).toBeTruthy()
   })

   it('should show "Show Answer button" button after clicking "Next Question"', () => {
      fireEvent.click(r.queryByText('Next Question'))
      expect(r.queryByText('Show Answer')).toBeTruthy()
   })

   it('should show "Restart App" button after showing answer on last card', () => {
      fireEvent.click(r.queryByText('Show Answer'))
      fireEvent.click(r.queryByText('Next Question'))
      fireEvent.click(r.queryByText('Show Answer'))
      expect(r.queryByText('Restart App')).toBeTruthy()

   })
})
