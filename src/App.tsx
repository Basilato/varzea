import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Championship from './pages/Championship'
import Lineup from './pages/Lineup'
import Standings from './pages/Standings'


function App() {
  const isLogged = true // mock: depois virá do useAuth
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          {isLogged ? (
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/c/:champId" element={<Championship />} />
              <Route path="/c/:champId/lineup" element={<Lineup />} />
              <Route path="/c/:champId/standings" element={<Standings />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" replace />} />
          )}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
export default App
