import Alerts from "./Alerts";
import React from "react";
import Purchases from "../ShoppingList/Purchase/Purchases";

const PurchasesAlerted = ({match}) => <Alerts component={Purchases} match={match}/>

export default PurchasesAlerted