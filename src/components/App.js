import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './Layout'
import Badges from '../pages/Badges'
import NewBadge from '../pages/NewBadge'
import NotFound from '../pages/NotFounds'
import Home from '../pages/Home'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={NewBadge} />
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App