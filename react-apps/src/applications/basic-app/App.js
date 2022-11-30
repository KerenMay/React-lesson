//this is a component - it has to start with a big letter!
function SayHello(props) {
  console.log(props);
  const myName = "Kerenush";
  return (
    <div>
      <div>Hello {myName}</div>
      <div style={{ color: props.color }}>Hello {props.name}</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <div>Hello</div>
      {/* this is how we can add the component to the code (this example is in the code of another component) */}
      <SayHello name="Keren" color="red" />
      <SayHello name="natan" color="pink" />
      <p>To react</p>
    </div>
  );
}

export default App;
