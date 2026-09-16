import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home.jsx"
import About from './pages/about.jsx'
import Contact from "./pages/contact.jsx"
import Prop from "./pages/prop.jsx"
import  View from "./pages/view.jsx"
import Login  from "./pages/login.jsx"
import Legal from "./pages/legal.jsx"

import Profile from './pages/profile.jsx'
import Search from './pages/search.jsx'
import PageMotion from './componets/PageMotion.jsx'
import ProtectedRoute from './auth/ProtectedRoute.jsx'
function App(){
    return(
                <PageMotion>
                    <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/prop' element={<Prop />} />
            <Route path='/login' element={<Login />} />
            <Route path='/privacy' element={<Legal />} />
            <Route path='/terms' element={<Legal />} />
              <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path='/search' element={<Search />} />
            <Route path='/view' element={<View />} />
                    </Routes>
                </PageMotion>
    )
}
export default App
