import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Explore from "./pages/Explore"
import './index.css';
import Main from "./pages/Main";


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
