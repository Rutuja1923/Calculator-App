import './App.css'

function App() {
  return (
    <>
    <h1 id="title">Calculator</h1>
    <div className="calculator">
      <div className="screen">
        <div className="input" />
        <div className="result" />
      </div>
      <div className="buttons">
        <div>
          <button id="reset" >AC</button>
          <button id="backspace">DEL</button>
          <button>%</button>
          <button>÷</button>
        </div>
        <div>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>x</button>
        </div>
        <div>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
        </div>
        <div>
          <button>3</button>
          <button>2</button>
          <button>1</button>
          <button>+</button>
        </div>
        <div>
          <button>00</button>
          <button>0</button>
          <button>.</button>
          <button id="eval">=</button>
        </div>
      </div>
    </div>
    </>

  )
}

export default App
