import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
<<<<<<< HEAD
import { Home, About, Policy, Investments, Login, Terms } from './pages'
import { Welcome, Employees, Users, AdminPanel, CreateUser } from './private'

=======
import Home from './pages/home'
import About from './pages/about'
import Policy from './pages/policy'
import Terms from './pages/terms'
import Investments from './pages/investments'
import AdminPanel from './private/admin'
import Login from './pages/login'
import AdminUsers from './private/admin/users/AdminUsers'
import Welcome from './private/admin/welcome'
import Customers from './private/admin/customers'
import Partners from './private/admin/partners'
import Purchases from './private/admin/purchases'
import Subscription from './private/admin/subscriptions'
>>>>>>> 2431de5aea92d1ffbae7addfe4d66dc85649fd00
import './assets/css/style.css'

function App() {
  return (
    <Router>
      <Routes>
        {publicLinks.map((page) => {
          return (
            <Route
              key={page.path}
              path={page.path}
              element={
                <>
                  <Header />
                  {page.element}
                  <Footer />
                </>
              }
              exact={page.exact}
            />
          )
        })}
        <Route path="/private/admin/" element={<AdminPanel />}>
          {privateLinks.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={page.element}
              exact={page.exact}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  )
}

const publicLinks = [
  {
    path: '/',
    element: <Home />,
    exact: true,
  },
  {
    path: '/about',
    element: <About />,
    exact: true,
  },
  {
    path: '/terms',
    element: <Terms />,
    exact: true,
  },
  {
    path: '/policy',
    element: <Policy />,
    exact: true,
  },
  {
    path: '/investments',
    element: <Investments />,
    exact: true,
  },
  {
    path: '/login',
    element: <Login />,
    exact: true,
  },
  {
    path: '*',
    element: <Home />,
    exact: false,
  },
]

const privateLinks = [
  { path: 'create-user', element: <CreateUser />, exact: true },
  { path: 'employees', element: <Employees />, exact: true },
  { path: 'users', element: <Users />, exact: true },
  { path: '', element: <Welcome />, exact: true },
  { path: 'customers', element: <Customers />, exact: true },
  { path: 'partners', element: <Partners />, exact: true },
  { path: 'purchases', element: <Purchases />, exact: true },
  { path: 'subscriptions', element: <Subscription />, exact: true },
]
export default App
