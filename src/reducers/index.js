// import getFlashcards from '../data/flashcards'
//
// const init = () => ({
//    flashcards: getFlashcards(),
//    index: 0,
//    showAnswer: false
// })

const flashcards = (state, action = {}) => {
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
      case 'REQUEST_FLASHCARDS':
         return {...state, loading: true}
      case 'RESTART':
      case 'RECEIVE_FLASHCARDS':
         return {
            index: 0,
            showAnswer: false,
            flashcards: action.json,
            loading: false
         }
      default:
         return state
   }
}

export default flashcards
