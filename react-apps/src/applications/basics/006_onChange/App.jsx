import { useState } from "react";

function Input() {
  const [value, setValue] = useState("");

  function valueChange(event) {
    const newValue = event.target.value;
    const googleUrl = `https://google.com/?q=${encodeURI(newValue)}`;
    setValue(event.target.value);
    console.log(googleUrl);
  }
  return (
    <div>
      <input onChange={valueChange} />
      <h2>{value}</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <Input />
    </div>
  );
}

export default App;
