import React from "react";
import PurchaseRow from "./PurchaseRow";

const PurchaseList = ({purchases}) => {
    return (
        <tbody>
        {purchases.map(purchase => <PurchaseRow urchase={purchase}/>)}
        </tbody>
    )
}

export default PurchaseList
