import { useState } from "react";
import Info from "./components/MedalList";
import MedalInput from "./components/MedalInput";

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
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  };

  const indexStyle = {
    width: "100px",
  };

  const alignStyle = {
    display: "flex",
    gap: "10px",
  };

  const [allInfo, setAllInfo] = useState([]);

  const [nation, setNation] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInfo = {
      id: new Date().getTime(),
      nation: nation,
      gold: Number(gold),
      silver: Number(silver),
      bronze: Number(bronze),
    };

    if (!newInfo.nation) {
      alert("국가명을 입력하세요");
      return;
    } else if (allInfo.map((info) => info.nation).includes(newInfo.nation)) {
      alert("이미 존재하는 국가명입니다");
      return;
    }

    setAllInfo([...allInfo, newInfo]);
    setNation("");
    setGold("");
    setSilver("");
    setBronze("");
  };

  const handleDelete = (id) => {
    const deletedInfo = allInfo.filter(function (info) {
      return info.id != id;
    });
    setAllInfo(deletedInfo);
  };

  const handleEdit = () => {
    const editedInfo = {
      nation: nation,
      gold: Number(gold),
      silver: Number(silver),
      bronze: Number(bronze),
    };

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
          bronze: Number(editedInfo.bronze),
        };
      } else {
        return info;
      }
    });

    isFound ? setAllInfo(editedAllInfo) : alert("먼저 국가 추가를 해주세요.");

    setNation("");
    setGold("");
    setSilver("");
    setBronze("");
  };

  const listItems = ["국가명", "금메달", "은메달", "동메달", "액션"];
  const InputList = [
    {
      text: "금메달",
      value: gold,
      changeState: setGold,
    },
    {
      text: "은메달",
      value: silver,
      changeState: setSilver,
    },
    {
      text: "동메달",
      value: bronze,
      changeState: setBronze,
    },
  ];

  return (
    <>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
        }}
      >
        <div style={style}>
          <h2>2024 파리 올림픽</h2>
          <div>
            <form style={alignStyle} onSubmit={handleSubmit}>
              <div>
                <h3>국가명</h3>
                <input
                  type="text"
                  value={nation}
                  onChange={(e) => {
                    setNation(e.target.value);
                  }}
                />
              </div>

              {InputList.map(function (item) {
                return <MedalInput key={item.text} item={item} />;
              })}

              <div
                style={{
                  display: "flex",
                  alignItems: "end",
                  gap: "10px",
                }}
              >
                <button type="submit">국가 추가</button>
                <button type="button" onClick={handleEdit}>
                  업데이트
                </button>
              </div>
            </form>
          </div>
        </div>
        <div style={style}>
          {allInfo.length === 0 ? (
            <div>아직 추가된 국가가 없습니다.</div>
          ) : (
            <div>
              <div style={alignStyle}>
                {listItems.map(function (item) {
                  return <div style={indexStyle}>{item}</div>;
                })}
              </div>
              {allInfo
                .sort((a, b) => b.gold - a.gold)
                .map(function (info) {
                  return (
                    <Info
                      key={info.id}
                      info={info}
                      handleDelete={handleDelete}
                    />
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
