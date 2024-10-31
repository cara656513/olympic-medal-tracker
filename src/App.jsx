import { useState } from 'react'
import Info from './components/Info';

function App() {
  const style = {
    textAlign: "center",
    display: "grid",
    justifyContent: "center",
    margin: "40px 0 0 0",
    padding: "30px",
    backgroundColor: "white",
    width: "1000px",
    borderRadius: "10px",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
  }

  const indexStyle = {
    width: "100px"
  }

  const alignStyle = {
    display: "flex",
    gap: "10px"
  }

  const [allInfo, setAllInfo] = useState([]);

  const [nation, setNation] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);



  const handleSubmit = (e) => {
    e.preventDefault()

    const newInfo = {
      id: new Date().getTime(),
      nation: nation,
      gold: Number(gold),
      silver: Number(silver),
      bronze: Number(bronze)
    }

    if (!newInfo.nation) {
      alert('국가명을 입력하세요');
      return;
    } else if (allInfo.map(info => info.nation).includes(newInfo.nation)) {
      alert('이미 존재하는 국가명입니다');
      return;
    }

    setAllInfo([...allInfo, newInfo]);
    setNation("");
    setGold("");
    setSilver("");
    setBronze("");

  }

  const handleDelete = (id) => {
    const deletedInfo = allInfo.filter(function (info) {
      return info.id != id
    })
    setAllInfo(deletedInfo);
  }

  const handleEdit = () => {
    const editedInfo = {
      nation: nation,
      gold: Number(gold),
      silver: Number(silver),
      bronze: Number(bronze)
    }

    //flag
    let isFound = false;

    const editedAllInfo = allInfo.map((info) => {
      if (info.nation === editedInfo.nation) {
        isFound = true;
        return {
          id: info.id,
          nation: info.nation,
          gold: Number(editedInfo.gold),
          silver: Number(editedInfo.silver),
          bronze: Number(editedInfo.bronze)
        }
      } else {
        return info;
      }
    })

    if (isFound) {
      setAllInfo(editedAllInfo);
    } else {
      alert('먼저 국가 추가를 해주세요.');
      return;
    }

    if (!allInfo.map((info) => info.nation).includes(editedInfo.nation)) {
    }

    setNation("");
    setGold("");
    setSilver("");
    setBronze("");
  }

  return (
    <>
      <div style={{
        display: "grid",
        justifyContent: "center"
      }}>
        <div style={style}>
          <h2>2024 파리 올림픽</h2>
          <div>
            <form
              style={alignStyle}
              onSubmit={handleSubmit}
            >
              <div><h3>국가명</h3>
                <input
                  type="text"
                  value={nation}
                  onChange={(e) => {
                    setNation(e.target.value)
                  }}
                />
              </div>
              <div

              ><h3>금메달</h3>
                <input
                  style={{
                    width: "150px"
                  }}
                  type="number"
                  min="0"
                  max="99"
                  value={gold}
                  onChange={(e) => {
                    setGold(e.target.value)
                  }}
                />
              </div>
              <div><h3>은메달</h3>
                <input
                  style={{
                    width: "150px"
                  }}
                  type="number"
                  min="0"
                  max="99"
                  value={silver}
                  onChange={(e) => {
                    setSilver(e.target.value)
                  }}
                />
              </div>
              <div><h3>동메달</h3>
                <input
                  style={{
                    width: "150px"
                  }}
                  type="number"
                  min="0"
                  max="99"
                  value={bronze}
                  onChange={(e) => {
                    setBronze(e.target.value)
                  }}
                />
              </div>
              <div>
                <button
                  type="submit"
                >국가 추가</button>
                <button
                  type="button"
                  onClick={handleEdit}
                >업데이트</button>
              </div>
            </form>
          </div>
        </div>
        <div style={style}>
          <div style={alignStyle}>
            <div>
              <div style={indexStyle}>국가명</div>
            </div>
            <div>
              <div style={indexStyle}>금메달</div>
            </div>
            <div>
              <div style={indexStyle}>은메달</div>
            </div>
            <div>
              <div style={indexStyle}>동메달</div>
            </div>
            <div>
              <div style={indexStyle}>액션</div>
            </div>
          </div>
          {allInfo.sort((a, b) => b.gold - a.gold).map(function (info) {
            return <Info
              key={info.id}
              info={info}
              handleDelete={handleDelete}
            />
          })}
        </div>
      </div>

    </>
  )
}

export default App

