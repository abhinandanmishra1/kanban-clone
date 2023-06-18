import React from 'react'

export const Show = ({children, iff}) => {
  if(!iff) return null;

  return (
    <>
      {children}
    </>
  )
}
