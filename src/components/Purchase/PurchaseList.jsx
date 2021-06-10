import React from "react";
import PurchaseRow from "./PurchaseRow";

const PurchaseList = ({purchases}) => {
    console.log(purchases)
    return (
        <tbody>
        {purchases.map(purchase => <PurchaseRow purchase={purchase}/>)}
        </tbody>
    )
}

export default PurchaseList
