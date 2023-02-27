import { h, render } from "preact";
import htm from "htm";
import { blah } from "./src/stuff.js";

const html = htm.bind(h);

function App() {
  return html`<h1>${blah("123")}</h1>`;
}

render(html`<${App}/>`, document.getElementById("app"));
