import { combineReducers } from 'redux'
import { useHistory } from "react-router-dom";


const studyFlashcards = (state = {}, action) => {
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
         return {
            index: state.index || 0,
            showAnswer: state.showAnswer || false,
            flashcards: state.flashcards || []
         }
   }
}

const flashcardIndex = (state = {}, action) => {
   switch (action.type) {
      case 'REQUEST_FLASHCARDS':
         return {...state, loading: true}
      case 'RECEIVE_FLASHCARDS':
         console.log('RECEIVE_FLASHCARDS from flashcardIndex')
         return {
            flashcards: action.json,
            loading: false
         }
      case 'NEXT_PAGE':
      case 'PREV_PAGE':
      default:
         const flashcards = state.flashcards || []
         return { flashcards }
   }
}

const editFlashcard = (state = {}, action) => {
   switch(action.type) {
      case 'SAVE_PROGRESS':
         return {
            flashcard: {...action.flashcard}
         }
         break
      case 'POSTED_FLASHCARD':
      default:
         const flashcard = state.flashcard || {
            answer: '',
            question: ''
         }
         return { flashcard }
   }
}

export default combineReducers({
   studyFlashcards,
   flashcardIndex,
   editFlashcard
})
