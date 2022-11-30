function Hello() {
  return (
    <div>
      <p>This is a paragraph</p>
      <div>Hello to jsx</div>
    </div>
  );
}
const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(Hello));
