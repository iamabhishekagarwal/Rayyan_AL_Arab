import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Maintenance from './pages/Maintenance'
import Home from './pages/Home'
import Aboutus from "./pages/Aboutus"
import Projects from './pages/Projects'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'
function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/maintenance' element={<Maintenance></Maintenance>} />
        <Route path='/' element={<Home></Home>}/>
        <Route path='/about' element={<Aboutus></Aboutus>}/>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App
