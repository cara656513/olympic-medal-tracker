import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>2024 파리 올림픽</h2>
      <div style={{
        display: "flex",
        gap: "10px",
      }}>
        <div><h3>국가명</h3>
          <input type="text" />
        </div>
        <div><h3>금메달</h3>
          <input type="number" />
        </div>
        <div><h3>은메달</h3>
          <input type="number" />
        </div>
        <div><h3>동메달</h3>
          <input type="number" />
        </div>
        <div>
          <button>국가 추가</button>
          <button>업데이트</button>
        </div>
      </div>
    </>
  )
}

export default App
