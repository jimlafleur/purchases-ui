import React, {useState} from "react";
import {postLists} from "../service/shoppingListService";

const ShoppingListAddForm = ({fetchLists, isEdit = false}) => {

    const [name, setName] = useState('')

    const nameChanged = event => {
        setName(event.target.value);
    }

    const saveList = () => {
        const list = {name}
        postLists(list, fetchLists)
        setName('')
    }

    return (
        <div className="input-group mb-3">
            <input type="text" value={name} onChange={nameChanged} placeholder="Название"/>
            <button type="submit" onClick={saveList}>
                Добавить список
            </button>
        </div>
    )
}

export default ShoppingListAddForm
