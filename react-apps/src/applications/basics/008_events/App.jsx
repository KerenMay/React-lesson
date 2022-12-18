import { useState } from "react";

function StyleButton(props) {
  const { children, background, whenClicked } = props;
  return (
    <button
      onClick={whenClicked}
      style={{ color: "white", background: background, padding: "10px" }}
    >
      {children}
    </button>
  );
}
function App() {
  const [counter, setCounter] = useState(0);


  function updateCounter() {
    console.log({ counter });
    setCounter(counter + 1);
  }
  return (
    <div>
      <StyleButton whenClicked={updateCounter} background="pink">
        Click Me
      </StyleButton>
      <StyleButton background="hotpink">Click Me</StyleButton>
      <p>{counter}</p>
    </div>
  );
}
export default App;
