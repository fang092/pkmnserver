import React from 'react'
import { Route, BrowserRouter, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import PkmnList from './components/PkmnList'
import PkmnStats from './components/PkmnStats'



function App (){

    return (  
      <BrowserRouter>
          <div className="w-full">
            <Navbar/>
          
              <Routes>
                <Route path="/" element={<PkmnList/>} />
                <Route path="/pokemon/:name/:index"  element={<PkmnStats/>} />
              </Routes>
            
          </div>
      </BrowserRouter>
    )


  }
export default App;

