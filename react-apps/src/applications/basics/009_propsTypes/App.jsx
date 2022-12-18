import MyComp from "./MyComp";
import MyComp2 from "./MyComp2";
function App() {
  return (
    <div>
      <MyComp name="Keren" num={10} />
      <MyComp2 image={{ url: "string lala" }}>
        <h2>hello im here</h2>
      </MyComp2>
    </div>
  );
}

export default App;
