import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Policy from './pages/policy'
import Terms from './pages/terms'
import Investments from './pages/investments'
import './assets/css/style.css'
import AdminPanel from './private/admin'
import Login from './pages/login'
import AdminUsers from './private/admin/users/AdminUsers'
import Welcome from './private/admin/welcome'

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
  { path: 'admin-list', element: <AdminUsers />, exact: true },
  { path: '', element: <Welcome />, exact: true },
]
export default App
