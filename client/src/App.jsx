import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Maintenance from './pages/Maintenance'
import Home from './pages/Home'
function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/maintenance' element={<Maintenance></Maintenance>} />
        <Route path='/' element={<Home></Home>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
