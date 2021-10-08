import { BrowserRouter, Route } from 'react-router-dom'

import { UsersDefault } from './pages/UsersDefault'
import { SignInDefault } from './pages/SignInDefault'
import { RegisterDefault } from './pages/RegisterDefault'
import { DashboardDefault } from './pages/DashboardDefault'

function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Route path={'/'} exact component={DashboardDefault} />
        <Route path={'/dashboard'} component={DashboardDefault} />
        <Route path={'/users'} component={UsersDefault} />
        <Route path={'/signin'} component={SignInDefault} />
        <Route path={'/register'} component={RegisterDefault} />
      </BrowserRouter>
    </div>
  )
}

export default App
