import React from 'react'
import Notes from './components/todonotes/Notes';
import Registration from './components/todonotes/Registration';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './components/todonotes/Signup';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<Registration/>}/> */}
      {/* <Route path='/Signup' element={<Signup/>}/> */}
      <Route path='/Notes' element={<Notes/>}/>
    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App;