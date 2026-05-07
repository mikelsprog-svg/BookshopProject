import { createContext, useState, useContext } from 'react'

// Creamos el contexto
const AuthContext = createContext()

// Creamos el Provider (el que envuelve la app y comparte los datos)
function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null)

  const login = (datosUsuario) => {
    setUsuario(datosUsuario)
  }

  const logout = () => {
    setUsuario(null)
  }

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook personalizado para usar el contexto fácilmente
function useAuth() {
  return useContext(AuthContext)
}

export { AuthProvider, useAuth }