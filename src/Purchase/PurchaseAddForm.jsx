import React, {useState} from "react";
import {postPurchases} from "../service/purchaseService";

const PurchaseAddForm = ({categories, fetchPurchases}) => {

    const [name, setName] = useState('')
    const [count, setCount] = useState('')
    const [coast, setCoast] = useState('')
    const [categoryId, setCategoryId] = useState(0)

    const nameChanged = event => {
        setName(event.target.value);
    }

    const countChanged = event => {
        setCount(event.target.value);
    }

    const coastChanged = event => {
        setCoast(event.target.value);
    }

    const categoryChanged = event => {
        setCategoryId(event.target.value);
    }

    const savePurchase = () => {
        const purchase = {name, count, coast, categoryId}
        console.log(purchase)
        postPurchases(purchase, fetchPurchases)
    }

    return (
        <div>
            <input type="text" value={name} onChange={nameChanged} placeholder="Название"/>
            <input type="text" value={count} onChange={countChanged} placeholder="Количество"/>
            <input type="text" value={coast} onChange={coastChanged} placeholder="Стоимость"/>
            <select onChange={categoryChanged}>
                {categories.map(category => <option value={category.id}>{category.name}</option>)}
            </select>
            <button type="submit" onClick={savePurchase}>
                Добавить покупку
            </button>
        </div>
    )
}

export default PurchaseAddForm