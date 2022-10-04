import React, { Suspense } from 'react'
import { isMobile, isTablet } from 'react-device-detect'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from 'routes'
import 'antd/dist/antd.min.css'
import 'assets/globalStyles/styles.scss'
import AuthLayout from 'layouts/AuthLayout'
import NonAuthLayout from 'layouts/NonAuthLayout'
function App() {
  return (
    <>
      <div
        id="wrapper"
        className={`wrapper ${isMobile ? 'isMobile' : 'isDesktop'} ${isTablet ? 'isTablet' : ''}`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            <Routes>
              {routes.map((route, idx) => {
                return (
                  <Route
                    key={idx}
                    path={route.path}
                    element={
                      route.useAuthLayout ? (
                        <AuthLayout>
                          <route.component />
                        </AuthLayout>
                      ) : (
                        <NonAuthLayout>
                          <route.component />
                        </NonAuthLayout>
                      )
                    }
                  />
                )
              })}
            </Routes>
          </BrowserRouter>
        </Suspense>
      </div>
    </>
  )
}

export default App
