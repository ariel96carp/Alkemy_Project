import Header from "./components/sections/Header"
import Main from "./components/sections/Main"
import Footer from "./components/sections/Footer"
import "./styles/css/styles.css"
import { BrowserRouter as Router } from "react-router-dom"
import StoreProvider from "./components/store/storeProvider"

function App() {
  return (
    <>
        <StoreProvider>
          <Router>
              <Header />
              <Main />
              <Footer />
          </Router>
        </StoreProvider>
    </>
  )
}

export default App;
