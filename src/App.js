import Categories from "./components/Categoty/Categories";
import {Redirect, Route, Switch, withRouter} from "react-router-dom"
import MyNavbar from "./MyNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import ShoppingLists from "./components/ShoppingList/ShoppingLists";

class App extends Component {
    render() {
        const {history} = this.props

        return (
            <div className="App">
                <MyNavbar/>
                <Switch>
                    <Route history={history} path='/lists' component={ShoppingLists}/>
                    <Route history={history} path='/lists/{id}' component={ShoppingLists}/>
                    <Route history={history} path='/categories' component={Categories}/>
                    <Redirect from='/' to='/lists'/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(App)
