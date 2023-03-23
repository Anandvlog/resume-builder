import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='main-page'>
    <div className='container'>
      <div className="row">
      {children}
      </div>
    </div>
    </div>
  )
}

export default Layout