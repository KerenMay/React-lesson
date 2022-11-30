function List1() {
  const names = [<li>Keren</li>, <li>Natan</li>, <li>Kerenush</li>];
  return <ul>{names}</ul>;
}

//
function List2() {
  const names = ["Lilly", "Sean", "Anna"];
  return (
    <div>
      {/* loop in react */}
      {names.map((name, index) => (
        <li key={name}>{name}</li>
      ))}
    </div>
  );
}

function App() {
  return <List2 />;
}

export default App;
