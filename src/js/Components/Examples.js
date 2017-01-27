import React from 'react'
import { Match, Link } from 'react-router'
import Simple from './Simple'

const PillLink = ({ label, to, activeOnlyWhenExact }) => (
    <Link activeOnlyWhenExact={activeOnlyWhenExact} to={to} >
        { ({ isActive, href, onClick }) =>
                <li role="presentation" className={isActive && 'active'}>
                    <a onClick={onClick} href={href} >{label}</a>
                </li>
        }
    </Link>
)

const Examples = ({ pathname }) => (
  <div>
    <h2>Examples</h2>
    <ul className="nav nav-pills">
        <PillLink to={`${pathname}/simple`} label="Simple Form"Form />
    </ul>

    <Match pattern={`${pathname}/simple`} component={Simple}/>
    <Match pattern={pathname} exactly render={() => (
      <h3>Select one of the examples</h3>
    )}/>
  </div>
)

export default Examples
