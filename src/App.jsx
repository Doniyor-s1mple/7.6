import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Posts from './Pages/Posts/Posts'
import Todos from './Pages/Todos/Todos'
import Users from './Pages/Users/Users'

const App = () => {
  return (
    <div className='container my-4'>
      <div className="row">
        <div className="col-6 offset-3">
          <Link to='/posts' className='btn btn-outline-light px-5'>Posts</Link>
          <Link to='/todos' className='btn btn-outline-light px-5 mx-3'>Todos</Link>
          <Link to='/users' className='btn btn-outline-light px-5'>Users</Link>
        </div>
      </div>
      <hr />
      <div className="row my-5">
        <div className="col-12">
          <Switch>
            <Route path='/posts' component={Posts} />
            <Route path='/todos' component={Todos} />
            <Route path='/users' component={Users} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App