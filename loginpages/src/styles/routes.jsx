
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import Orders from '../Pages/Orders'

export const Routes = () => {

    return(
        <Router>
            <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/pedidos' component={Orders}/>
            </Switch>
        </Router>
    )

}