import React from 'react'
import { Route, Link } from 'react-router-dom'

const PillLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route exact={activeOnlyWhenExact} children={({ match }) => (
        <li role="presentation" className={match ? 'active' : ''}>
            <Link to={to}>{label}</Link>
        </li>
    )}/>
)

export default PillLink
