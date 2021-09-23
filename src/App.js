import {Redirect, Route, Switch, withRouter} from "react-router-dom"
import MyNavbar from "./MyNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import Container from "@material-ui/core/Container";
import InitForm from "./Init/InitForm";
import EditList from "./components/ShoppingList/Purchase/Goods/EditList";
import Plans from "./components/Plan/Plans";
import ShoppingListsAlerted from "./components/Alerts/ShoppingListsAlerted";
import CategoriesAlerted from "./components/Alerts/CategoriesAlerted";
import ProductsAlerted from "./components/Alerts/ProductsAlerted";
import PurchasesAlerted from "./components/Alerts/PurchasesAlerted";

class App extends Component {
    render() {
        const {history} = this.props

        return (
            <div className="App">
                <Container maxWidth="lg">
                    <MyNavbar/>
                    <Container maxWidth="md">
                        <Switch>
                            <Route history={history} exact path='/lists' component={ShoppingListsAlerted}/>
                            <Route history={history} exact path='/lists/:id' component={PurchasesAlerted}/>
                            <Route history={history} exact path='/categories' component={CategoriesAlerted}/>
                            <Route history={history} exact path='/products' component={ProductsAlerted}/>
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
