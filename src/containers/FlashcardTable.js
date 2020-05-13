import { connect } from 'react-redux'
import FlashcardTable from '../components/FlashcardTable'

const mapStateToProps = (state, ownProps) => {
   let flashcards = state?.flashcards || []
   return {
      flashcards: flashcards
   }
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(FlashcardTable)
