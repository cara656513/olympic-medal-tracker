import { useState } from 'react'
import './App.css'

function App() {
  const [nation, setNation] = useState([]);
  const addNationHandler = () => {
    const newNation = {
      name: nation
    }

    setNation([...nation], newNation)
  }

  return (
    <>
      <div style={{
        display: "grid",
        justifyContent: "center"
      }}>
        <div style={{
          textAlign: "center",
          display: "grid",
          justifyContent: "center",
          margin: "40px 0 0 0",
          padding: "30px",
          backgroundColor: "white",
          width: "1000px",
          borderRadius: "10px",
          boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
        }}>
          <h2>2024 파리 올림픽</h2>
          <div style={{
            display: "flex",
            gap: "10px",
          }}>
            <div><h3>국가명</h3>
              <input
                type="text"
                onChange={(e) => setNation(e.target.value)}
              />
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
              <button
                onClick={addNationHandler}
              >국가 추가</button>
              <button>업데이트</button>
            </div>
          </div>
        </div>
        <div style={{
          textAlign: "center",
          display: "grid",
          justifyContent: "center",
          margin: "40px 0 0 0",
          padding: "30px",
          backgroundColor: "white",
          width: "1000px",
          borderRadius: "10px",
          boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
        }}>
          <div>
            아직 추가된 국가가 없습니다. 메달을 추적하세요!

          </div>
        </div>
      </div>
    </>
  )
}

export default App
