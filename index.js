const { createRoot } = require("react-dom/client");
const { blah } = require("./src/stuff.js");

function App() {
  return <h1>{blah("123")}</h1>;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
