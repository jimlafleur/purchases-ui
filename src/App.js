import Categories from "./components/Categoty/Categories";
import {Redirect, Route, Switch, withRouter} from "react-router-dom"
import MyNavbar from "./MyNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import ShoppingLists from "./components/ShoppingList/ShoppingLists";
import Container from "@material-ui/core/Container";
import InitForm from "./Init/InitForm";
import EditList from "./components/ShoppingList/Goods/EditList";
import Products from "./components/Product/Products";
import Plans from "./components/Plan/Plans";
import Purchases from "./components/ShoppingList/Purchase/Purchases";

class App extends Component {
    render() {
        const {history} = this.props

        return (
            <div className="App">
                <Container maxWidth="lg">
                    <MyNavbar/>
                    <Container maxWidth="md">
                        <Switch>
                            <Route history={history} exact path='/lists' component={ShoppingLists}/>
                            <Route history={history} exact path='/lists/:id' component={Purchases}/>
                            <Route history={history} exact path='/categories' component={Categories}/>
                            <Route history={history} exact path='/products' component={Products}/>
                            <Route history={history} exact path='/plans' component={Plans}/>
                            <Route history={history} exact path='/lists/:id/edit' component={EditList}/>
                            <Route history={history} exact path='/init' component={InitForm}/>
                            <Redirect from='/' to='/lists'/>
                        </Switch>
                    </Container>
                </Container>

            </div>
        );
    }
}

export default withRouter(App)
