import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from 'contexts'
import { useNavigate } from 'react-router-dom'
import { LOGINED_DATA } from 'helpers/constants'
import { ModelUserLogin } from 'models/user'

type Props = {
  children?: React.ReactNode
}

const AuthLayout = (props: Props) => {
  const { authenticated, loginedSetter } = useContext(MainContext)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const navigate = useNavigate()
  var { children } = props
  const isBypassLogin = false
  useEffect(() => {
    const onAppLoad = async () => {
      const data = localStorage.getItem(LOGINED_DATA)
      if (!data) {
        navigate('/signin')
        return
      }
      const loginData: ModelUserLogin = JSON.parse(data)
      loginedSetter(loginData)
      setIsAuthenticated(true)
    }
    if (authenticated) {
      setIsAuthenticated(true)
      return
    }
    onAppLoad()
  }, [authenticated, loginedSetter, navigate])
  return isAuthenticated || isBypassLogin ? <>{children}</> : null
}

export default AuthLayout
