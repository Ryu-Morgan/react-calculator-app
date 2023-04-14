import "./App.css";

function App() {
  return (
    <div className="calc-grid">
      <div className="output">
        <div className="previous-output"></div>
        <div className="previous-current"></div>
      </div>
      <button className="width-two">Clear</button>
      <button>Delete</button>
      <button>/</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="width-two">=</button>
    </div>
  );
}

export default App;
