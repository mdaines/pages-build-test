import { render } from "preact";
import { blah } from "./src/stuff.js";

function App() {
  return <h1>{blah("123")}</h1>;
}

render(<App />, document.getElementById("app"));
