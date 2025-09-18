import { Dashboard } from "./components/dashboard"
import { Navbar } from "./components/navbar"
import { Process } from "./components/process"

function App() {
  return (
    <main className="main">
      <Navbar/>
      <Dashboard/>
      <Process/>
    </main>
  )
}

export default App
