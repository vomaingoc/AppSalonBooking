import React from 'react'

const Layout = (props: any) => {
  const { children } = props
  return (
    <>
      <div className={`salon-app`}>{children}</div>
    </>
  )
}
export default Layout
