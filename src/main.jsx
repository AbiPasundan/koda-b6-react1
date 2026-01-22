import {createRoot} from "react-dom/client"

const el = document.getElementById("root")
const root = createRoot(el)

function Box() {
  return (<h1>Halo Dunia</h1>)
}

root.render(<Box/>)

