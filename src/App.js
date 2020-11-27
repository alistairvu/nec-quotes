import React, { useState } from "react"
import useQuote from "./useQuote"
import QuoteDisplay from "./QuoteDisplay"

const App = () => {
  const [click, setClick] = useState(false)
  const [quote, author, isLoaded] = useQuote(click)

  if (isLoaded) {
    return (
      <QuoteDisplay
        quote={quote}
        author={author}
        onClick={() => setClick((prev) => !prev)}
      />
    )
  } else {
    return <p className="loading">Loading...</p>
  }
}

export default App
