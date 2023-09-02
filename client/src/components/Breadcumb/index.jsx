import React from 'react'

const Breadcrumb = ({ crumbs }) => {
  return (
    <div className=''>
      {crumbs.map((crumb, index) => (
        <div key={index}>
          {crumb}
        </div>
      ))}
    </div>
  )
}

export default Breadcrumb;