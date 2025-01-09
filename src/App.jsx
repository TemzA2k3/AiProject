import './App.css'

function App() {
  return (
    <div className="app">
      <h1>AI Application</h1>
        <div className="flex-row">
            <input placeholder="Enter prompt..."/>
            <button>Send</button>
        </div>
        <textarea placeholder="Result..." />
    </div>
  )
}

export default App
