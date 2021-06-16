import React, {useEffect, useState} from "react";
import {postPurchases} from "../../service/purchaseService";
import {getCategories} from "../../service/categoryService";

const PurchaseAddForm = ({listId, refreshList}) => {

    const [name, setName] = useState('')
    const [count, setCount] = useState('')
    const [coast, setCoast] = useState('')
    const [categories, setCategories] = useState([])
    const [categoryId, setCategoryId] = useState(0)

    const fetchCategories = () => getCategories(setCategories)

    useEffect(fetchCategories, [])

    useEffect(() => setCategoryId(categories[0]?.id), [categories])

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

    const clearForm = () => {
        setName('')
        setCount('')
        setCoast('')
    }

    const savePurchase = () => {
        const purchase = {name, count, coast}
        const params = {categoryId, listId}
        postPurchases(purchase, refreshList, params)
        clearForm()
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
