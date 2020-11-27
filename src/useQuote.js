import { useState, useEffect } from "react"

const url = "https://type.fit/api/quotes"

const useQuotes = (click) => {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)

  const getQuote = async () => {
    const res = await fetch(url)
    const data = await res.json()

    const length = data.length
    const randQuote = data[Math.floor(Math.random() * length)]

    setQuote(randQuote.text)
    setAuthor(randQuote.author)
    setIsLoaded(true)
  }

  useEffect(() => {
    setIsLoaded(false)
    getQuote()
  }, [click])

  return [quote, author, isLoaded, setIsLoaded]
}

export default useQuotes
