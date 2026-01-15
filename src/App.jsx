import { BrowserRouter as Router, Routes, Route } from "react-router"
import Navbar from "./component/Navbar"
import Home from "./component/Home"
import Categories from "./component/Categories"
import Bestsellers from "./component/Bestsellers"
import About from "./component/About"
import Contact from "./component/Contact"
import Footer from "./component/Footer"

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/bestsellers" element={<Bestsellers/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
