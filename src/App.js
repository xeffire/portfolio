/* eslint-disable react/react-in-jsx-scope */
import logo from "./Logo.svg";
// import todoApp from "./todo-app.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header"></header>
      <button className="contact">Contact</button>
      <div className="intro">
        <div className="block-side"></div>
        <p>
          Laba, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </div>
      <article>
        <div className="container-desc">
          <h2></h2>
          <p></p>
          <div className="container-btn">
            <button>GitHub</button>
            <button>Demo</button>
          </div>
        </div>
        <div className="article-img">
          <div></div>
        </div>
        </article>
    </div>
  );
}

export default App;
