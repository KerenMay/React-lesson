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

function StyleUl({ children }) {
  return (
    <div
      style={{
        background: "pink",
        color: "hotpink",
        padding: "5px",
        fontSize: "20px",
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
      <StyleUl>
        <ul>
          <li>K</li>
          <li>E</li>
          <li>R</li>
          <li>E</li>
          <li>N</li>
        </ul>
      </StyleUl>
    </div>
  );
}

export default App;
