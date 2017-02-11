import { HashRouter, Match, Link } from 'react-router'
import React from 'react'
import Home from './Components/Home'
import Examples from './Components/Examples'
import Options from './Components/Options'

const NavLink = ({ label, to, activeOnlyWhenExact }) => (
    <Link activeOnlyWhenExact={activeOnlyWhenExact} to={to} >
        { ({ isActive, href, onClick }) =>
                <li className={isActive && 'active'}>
                    <a onClick={onClick} href={href} >{label}</a>
                </li>
        }
    </Link>
)

const App = () => {
    return (
        <HashRouter>
            <div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">liform-react</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <NavLink to="/" label="Main" activeOnlyWhenExact={true}/>
                            <NavLink to="/options" label="Json Schema Options" activeOnlyWhenExact={false}/>
                            <NavLink to="/examples" label="Examples" activeOnlyWhenExact={false}/>
                        </ul>
                    </div>
                </div>
            </nav>


                {/*<Miss component={NoMatch}/>*/}
            <div className="container">
                <Match exactly pattern="/" component={Home} />
                <Match pattern="/examples" component={Examples} />
                <Match pattern="/options" component={Options} />
            </div>
            </div>
        </HashRouter>
    )
}

export default App
