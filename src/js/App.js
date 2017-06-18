import { Route, Link, HashRouter } from 'react-router-dom'
import React from 'react'
import Home from './Components/Home'
import Examples from './Components/Examples'
import Options from './Components/Options'

const NavLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route exact={activeOnlyWhenExact} children={({ match }) => (
        <li className={match ? 'active' : ''}>
            <Link to={to}>{label}</Link>
        </li>
    )}/>
)

const App = () => {
    return (
        <HashRouter basename="/liform-react">
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
                    <Route exact path="/" component={Home} />
                    <Route path="/examples" component={Examples} />
                    <Route path="/options" component={Options} />
                </div>
            </div>
        </HashRouter>
    )
}

export default App
