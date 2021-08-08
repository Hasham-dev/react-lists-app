import React from 'react'
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom'
import Footer from '../component/Footer'
import NotFound from '../pages/404'
import About from '../pages/About'
import Home from '../pages/Home'
import ListDetails from '../pages/listsDetails/listDetails'
import Lists from '../pages/listsDetails/lists'

export default function Routes () {
  return (
    <Router>
      <nav>
        <div className='logo'>
          List App
        </div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/lists'>Listing</Link>
      </nav>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/lists' component={Lists} />
        <Route exact path='/lists/:id' component={ListDetails} />
        <Route path='/*' component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  )
}
