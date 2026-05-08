import { Navigate } from 'react-router-dom'
import { useAuth } from '../../AuthContext'

function PrivateRoute({ children }) {
  const { usuario } = useAuth()

  if (!usuario) {
    return <Navigate to="/Login" />
  }

  return children
}

export default PrivateRoute