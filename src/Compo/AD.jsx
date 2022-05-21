import React, { useContext } from 'react'
import { FirstName, lastName } from './AB'

export default function AD() {
    const First=useContext(FirstName);
    const last=useContext(lastName);
  return (
    <div>
{First}{last}
    </div>
  )
}
