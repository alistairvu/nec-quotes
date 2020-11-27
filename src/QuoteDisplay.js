import React from "react"

const QuoteDisplay = ({ quote, author, onClick }) => {
  return (
    <div className="container">
      <p className="quote">"{quote}"</p>
      <p className="author">{author !== null && author}</p>
      <button onClick={onClick} className="quote-btn">
        Get another quote
      </button>
    </div>
  )
}

export default QuoteDisplay
