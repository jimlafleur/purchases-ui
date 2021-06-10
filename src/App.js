import Purchases from "./Purchase/Purchases";
import Categories from "./Categoty/Categories";
import {Redirect, Route, Switch, withRouter} from "react-router-dom"
import MyNavbar from "./MyNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import ShoppingLists from "./ShoppingList/ShoppingLists";

class App extends Component {
    render() {
        const {history} = this.props

        return (
            <div className="App">
                <MyNavbar/>
                <Switch>
                    <Route history={history} path='/lists' component={ShoppingLists}/>
                    <Route history={history} path='/purchases' component={Purchases}/>
                    <Route history={history} path='/categories' component={Categories}/>
                    <Redirect from='/' to='/purchases'/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(App)
