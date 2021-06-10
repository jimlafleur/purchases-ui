import React, {useEffect, useState} from "react";
import PurchaseList from "./PurchaseList";
import PurchaseAddForm from "./PurchaseAddForm";
import { getPurchases} from "../../service/purchaseService";
import {getCategories} from "../../service/categoryService";

const Purchases = () => {
    const [purchases, setPurchases] = useState([])
    const [categories, setCategories] = useState([])

    const fetchPurchases = () => getPurchases(setPurchases)
    const fetchCategories = () => getCategories(setCategories)

    useEffect(fetchPurchases, [])

    useEffect(fetchCategories, [])

    return (
        <div className="container-fluid">
            <PurchaseAddForm categories={categories} fetchPurchases={fetchPurchases}/>
            <PurchaseList purchases={purchases}/>
        </div>
    )
}

export default Purchases
