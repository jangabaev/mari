// import { Advertising } from "./components/advertising"
// import { Dashboard } from "./components/dashboard"
import { Navbar } from "./components/navbar"
// import { Process } from "./components/process"
// import { Footer } from "./components/footer"
import { Contact } from "./components/contact"
import { ComplexMarketing } from "./components/complexInflunse"
import { ClientThink } from "./components/thinking"

function App() {
  return (
    <main className="main">
      <Navbar />
      {/* <Dashboard /> */}
      {/* <Process /> */}
      {/* <Advertising/> */}
      <ComplexMarketing />
      <ClientThink />
      <Contact />
      {/* <Footer /> */}
    </main>
  )
}

export default App
