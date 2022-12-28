import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>

            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
            <li>
              <Link to='/form-login'>Login</Link>
            </li>
          </ul>
        </nav>
  )
}
