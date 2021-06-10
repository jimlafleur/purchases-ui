import React, {useState} from "react";
import {deleteList, editList} from "../../service/shoppingListService";
import PurchaseList from "../Purchase/PurchaseList";
import PurchaseAddForm from "../Purchase/PurchaseAddForm";

const ShoppingLists = ({list, refreshLists, categories}) => {

    const [isEdit, setIsEdit] = useState(false)
    const [showPurchases, setShowPurchases] = useState(false)
    const [newName, setNewName] = useState(list.name)

    const edit = () => {
        setIsEdit(true)
    }

    const save = () => {
        editList({name: newName, id: list.id}, refreshLists)
        setIsEdit(false)
    }

    const remove = () => {
        deleteList(list.id, refreshLists)
    }

    const nameChanged = event => {
        setNewName(event.target.value);
    }

    const showPurchasesClick = () => {
        setShowPurchases(!showPurchases)
    }

    const getListSize = () => {
        const count = list.purchases?.size()
        return count ? `Количество покупок: ${count}` : "Покупок нет"
    }

    return (
        <tr onDoubleClick={showPurchasesClick}>
            <td hidden={isEdit}>
                <div>
                    {list.name}
                </div>
                <div hidden={!showPurchases}>
                    <span>{getListSize()}</span>
                    <PurchaseList purchases={list.purchaseList}/>
                    <PurchaseAddForm categories={categories}/>
                </div>
            </td>
            <td hidden={!isEdit}>
                <input type="text" value={newName} onChange={nameChanged} placeholder="Название"/>
            </td>
            <td hidden={isEdit} className="col-md-2">
                <button onClick={showPurchasesClick}>{showPurchases ? "Скрыть покупки" : "Показать покупки"}</button>
            </td>
            <td hidden={isEdit} className="col-md-1">
                <button onClick={edit}>Редактировать</button>
            </td>
            <td hidden={!isEdit} className="col-md-1">
                <button onClick={save}>Сохранить</button>
            </td>
            <td className="col-md-1">
                <button onClick={remove}>Удалить</button>
            </td>
        </tr>
    )
}

export default ShoppingLists