import React from 'react'
import { Link } from 'react-router-dom'


export default function StartUps() {
  return (
    <div>
      <Link to={"/admin/startUps-form"} className='bg-sky-200'>startUps form</Link>
    </div>
  )
}
