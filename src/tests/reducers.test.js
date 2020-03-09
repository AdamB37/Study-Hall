import rootReducer from '../reducers'
import {revealAnswer, nextQuestion, restart} from '../actions'

describe('reducers', () => {
   it('should initialize the app', () => {
      let state = rootReducer()
      expect(state.flashcards.length).toEqual(3)
      expect(state.index).toEqual(0)
      expect(state.showAnswer).toBeFalsy()
   })

   it('should change the state to reveal the answer', () => {
      let state = rootReducer()
      state = rootReducer(state, revealAnswer())
      expect(state.flashcards.length).toEqual(3)
      expect(state.index).toEqual(0)
      expect(state.showAnswer).toBeTruthy()
   })

   it('should change the state to go to the next question', () => {
      let state = rootReducer()
      state = rootReducer(state, nextQuestion())
      expect(state.flashcards.length).toEqual(3)
      expect(state.index).toEqual(1)
      expect(state.showAnswer).toBeFalsy()
   })

   it('should change the state to restart the app', () => {
      let state = rootReducer()
      state = rootReducer(state, nextQuestion())
      state = rootReducer(state, restart())
      expect(state.flashcards.length).toEqual(3)
      expect(state.index).toEqual(0)
      expect(state.showAnswer).toBeFalsy()
   })
})
