function Hello() {
  return React.createElement("div", null, "Hello to React :)");
}
const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(Hello));
