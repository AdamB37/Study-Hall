// study flashcards actions
export const revealAnswer = _ => ({
   type: 'REVEAL_ANSWER'
})

export const nextQuestion = _ => ({
   type: 'NEXT_QUESTION',
})

export const restart = _ => ({
   type: 'RESTART'
})

//edit flashcard actions
export const submit = _ => ({
   type: 'SUBMIT'
})


// AJAX
export const requestFlashcards = _ => ({
   type: 'REQUEST_FLASHCARDS'
})

export const receiveFlashcards = json => ({
   type: 'RECEIVE_FLASHCARDS',
   json: json.data.flashcards
})

export const postedFlashcard = () => ({
   type: 'POSTED_FLASHCARD'
})

export const saveProgress = (flashcard) => {
   console.log('flashcard from action', flashcard)
   return ({
      type: 'SAVE_PROGRESS',
      flashcard
   })
}

export function getFlashcards() {
   return (dispatch) => {
      dispatch(requestFlashcards())
      return fetch('http://localhost:3001/api/flashcards')
      .then(
         response => response.json(),
         console.error
      )
      .then(json => dispatch(receiveFlashcards(json)))
   }
}

export function postFlashcard(flashcard, redirectToIndexPage) {
   console.log('body', flashcard, redirectToIndexPage)
   return (dispatch) => {
      return fetch('http://localhost:3001/api/flashcards', {
         method: 'POST',
         headers: {
            'Origin': 'http://localhost:3000',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(flashcard)
      }).then(res => {
         alert('Succesfully posted flashcard!')
         dispatch(postedFlashcard())
         console.log('redirectToIndexPage then',redirectToIndexPage)
         redirectToIndexPage()
      }).catch(err => {
         console.error(err)
      })
   }
}
