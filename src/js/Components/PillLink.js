import React from 'react'
import { Link } from 'react-router'

const PillLink = ({ label, to, activeOnlyWhenExact }) => (
    <Link activeOnlyWhenExact={activeOnlyWhenExact} to={to} >
        { ({ isActive, href, onClick }) =>
                <li role="presentation" className={isActive && 'active'}>
                    <a onClick={onClick} href={href} >{label}</a>
                </li>
        }
    </Link>
)

export default PillLink
