
import './App.css';

window.onload= init;
function init(){
  generateQuote()
}

function generateQuote(){
  console.log("quote Generated")
}





function App() {
  return (
    <div className="App">
      <wrapper id="quote-box">

      <div id="text">
        
        <div id="author">
          <button id="new-quote" onClick={generateQuote}>New Quote</button>
        </div>

        <a href="twitter.com/intent/tweet" id="tweet-quote">Tweet</a>

      </div>


      </wrapper>
    </div>
  );
}

export default App;
