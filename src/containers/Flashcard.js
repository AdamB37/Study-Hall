import { connect } from 'react-redux'
import { revealAnswer, nextQuestion, restart } from '../actions'
import Flashcard from '../components/Flashcard'

const mapStateToProps = (state, ownProps) => {
   if (state?.flashcards) {
      return {
         showAnswer: state.showAnswer,
         visibleFlashcard: state.flashcards[state.index],
         lastCard: state.flashcards.length - 1 === state.index
      }
   } else {
      return {
         showAnswer: false,
         visibleFlashcard: null,
         lastCard: false
      }
   }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
   clickHandlers: {
      revealAnswer: () => dispatch(revealAnswer()),
      nextQuestion: () => dispatch(nextQuestion()),
      restart: () => dispatch(restart())
   }
})

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Flashcard)
