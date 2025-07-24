import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Maintenance from './pages/Maintenance'
function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Maintenance></Maintenance>} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
