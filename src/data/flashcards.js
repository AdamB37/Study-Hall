export default function() {
   const flashcards = [
      {
         question: "What is the derivative of e^x?",
         answer: "e^x"
      },
      {
         question: "What is the square root of 144?",
         answer: "12"
      },
      {
         question: "What is 2 + 2?",
         answer: "4"
      },
   ]

   function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
         let j = Math.floor(Math.random() * (i + 1))
         let temp = array[i]
         array[i] = array[j]
         array[j] = temp
      }
      return array
   }

   return shuffle(flashcards)
}
