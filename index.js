import { createRoot } from "react-dom/client";
import { blah } from "./src/stuff.js";

function App() {
  return <h1>{blah("123")}</h1>;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
