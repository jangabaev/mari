// import { Advertising } from "./components/advertising"
import { Dashboard } from "./components/dashboard"
import { Navbar } from "./components/navbar"
import { Process } from "./components/process"
import { Footer } from "./components/footer"
import { Contact } from "./components/contact"

function App() {
  return (
    <main className="main">
      <Navbar/>
      <Dashboard/>
      <Process/>
      {/* <Advertising/> */}
      <Contact/>
      <Footer />
    </main>
  )
}

export default App
