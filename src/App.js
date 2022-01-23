import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState([]);
  const [color, setColor] = useState("#fffff");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();

      setQuotes(data);
      let randIndex = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randIndex]);
    }
    fetchData();
  }, []);

  const getNewQuote = () => {
    const colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ];

    setQuotes(quotes);
    let randIndex = Math.floor(Math.random() * quotes.length);
    let randomColorIndex = Math.floor(Math.random() * colors.length);
    setRandomQuote(quotes[randIndex]);
    setColor(colors[randomColorIndex]);
  };

  return (
    <div style={{ backgroundColor: color, minHeight: "100vh" }}>
      <div className="container pt-5 " id="quote-box">
        <div className="jumbotron">
          <div className="card">
            <div className="card-header ">INSPIRATIONAL QUOTES</div>
            <div className="card-body">
              {randomQuote ? (
                <>
                  <h5
                    style={{ color: color }}
                    className="card-title"
                    id="author"
                  >
                    {randomQuote.author || "No author"}
                  </h5>
                  <p style={{ color: color }} className="card-text" id="text">
                    &quot;{randomQuote.text}&quot;
                  </p>
                </>
              ) : (
                <h2>Loading</h2>
              )}

              <div className="row">
                <button
                  id="new-quote"
                  onClick={getNewQuote}
                  className="btn btn-primary ml-3"
                >
                  New Quote
                </button>
                <a
                  id="tweet-quote"
                  href={
                    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
                    encodeURIComponent(
                      '"' + randomQuote.text + '" ' + randomQuote.author
                    )
                  }
                >
                  <i className="bi bi-twitter icn"></i>
                </a>
                <a>
                  <i class="bi bi-whatsapp icn"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
