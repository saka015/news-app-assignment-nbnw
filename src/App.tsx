
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import NewsPage from "./pages/NewsPage"
import Navbar from "./components/Navbar";

const App = () => {
  
  return (

    <div className="bg-slate-800">
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/news" element={<NewsPage/>} />
      </Routes></div>
  )
}

export default App