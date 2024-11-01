const MedalInput = ({ item }) => {
  return (
    <div>
      <h3>{item.text}</h3>
      <input
        style={{
          width: "150px",
        }}
        type="number"
        min="0"
        max="99"
        value={item.value}
        onChange={(e) => {
          item.changeState(e.target.value);
        }}
      />
    </div>
  );
};

export default MedalInput;
