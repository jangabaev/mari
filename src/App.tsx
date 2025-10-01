import { ModalProvider } from "./modal.context";
import { Advertising } from "./components/advertising"
import { Dashboard } from "./components/dashboard"
import { Navbar } from "./components/navbar"
import { Process } from "./components/process"
import { Footer } from "./components/footer"
import { Contact } from "./components/contact"
import { ComplexMarketing } from "./components/complexInflunse"
import { ClientThink } from "./components/thinking"

function App() {
  return (
    <main className="main">
      <ModalProvider>
        <Navbar />
        <Dashboard />
        <Process />
        <Advertising />
        <ComplexMarketing />
        <ClientThink />
        <Contact />
        <Footer />
      </ModalProvider>
    </main>
  )
}

export default App
