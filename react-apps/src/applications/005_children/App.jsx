function StyleTitle({ children }) {
  return (
    <div
      style={{
        background: "blue",
        color: "white",
        padding: "10px",
        fontSize: "50px",
      }}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <div>
      <StyleTitle>
        <div>Hello</div>
        <p>This is my title</p>
      </StyleTitle>
    </div>
  );
}

export default App;
