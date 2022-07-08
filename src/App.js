import React, {Component} from 'react'
import { Route, BrowserRouter as Router , Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import PkmnList from './components/PkmnList'
import PkmnStats from './components/PkmnStats'



class App extends Component{

  
  render(){

    return (  
      <Router>
          <div className="w-screen h-screen bg-platnium">
            <Navbar/>
          
              <Switch>
                <Route exact path="/" component={PkmnList} />
                <Route exact path="/pokemon/:index"  component={PkmnStats} />
              </Switch>
            
          </div>
      </Router>
    )


  }
  
}
export default App;

