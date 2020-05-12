export const revealAnswer = _ => ({
   type: 'REVEAL_ANSWER'
})

export const nextQuestion = _ => ({
   type: 'NEXT_QUESTION',
})

export const restart = _ => ({
   type: 'RESTART'
})

export const requuestFlashcards = _ => ({
   type: 'REQUEST_FLASHCARDS'
})

export const receiveFlashcards = json => ({
   type: 'RECEIVE_FLASHCARDS',
   json: json.flashcards
})

export function fetchFlashcards() {
   return (dispatch) => {
      dispatch(requuestFlashcards())
      return fetch('http://localhost:3001/api/flashcards')
      .then(
         response => response.json(),
         console.error
      )
      .then(json => dispatch(receiveFlashcards(json)))
   }
}
