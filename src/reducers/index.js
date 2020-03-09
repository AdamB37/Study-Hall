import getFlashcards from '../data/flashcards'

const init = () => ({
   flashcards: getFlashcards(),
   index: 0,
   showAnswer: false
})

const flashcards = (state = init(), action = {}) => {
   switch (action.type) {
      case 'REVEAL_ANSWER':
         return {
            flashcards: state.flashcards,
            index: state.index,
            showAnswer: true
         }
      case 'NEXT_QUESTION':
         return {
            flashcards: state.flashcards,
            index: state.index + 1,
            showAnswer: false
         }
      case 'RESTART':
         return init()
      default:
         return state
   }
}

export default flashcards
