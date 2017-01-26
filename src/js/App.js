import { HashRouter, Match, Link } from 'react-router'
import React from 'react'
import Home from './Components/Home'
import Examples from './Components/Examples'

const App = () => {
    return (
        <HashRouter>
            <div>
                <ul>
                    <li><Link to="/">Main</Link></li>
                    <li><Link to="/examples">Examples</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                </ul>

                <hr/>

                <Match exactly pattern="/" component={Home} />
                <Match pattern="/examples" component={Examples} />

                {/*<Miss component={NoMatch}/>*/}
            </div>
        </HashRouter>
    )
}

export default App
