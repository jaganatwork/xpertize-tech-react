import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Xpertize Tech React</h1>
        <p>Modern React Development Environment</p>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="features">
          ⚡ Vite + React + TypeScript<br />
          🧪 Vitest + Testing Library<br />
          📏 ESLint + Prettier<br />
          ✅ Ready for Development
        </p>
      </header>
    </div>
  )
}

export default App
