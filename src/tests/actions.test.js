import { revealAnswer, nextQuestion, restart } from '../actions'

describe('actions', () => {
   it('should create an action to reveal the answer', () => {
      const expectedAction = {
         type: 'REVEAL_ANSWER'
      }
      expect(revealAnswer()).toEqual(expectedAction)
   })
   it('should create an action to go to the next question', () => {
      const expectedAction = {
         type: 'NEXT_QUESTION'
      }
      expect(nextQuestion()).toEqual(expectedAction)
   })
   it('should create an action to restart the application', () => {
      const expectedAction = {
         type: 'RESTART'
      }
      expect(restart()).toEqual(expectedAction)
   })
})
