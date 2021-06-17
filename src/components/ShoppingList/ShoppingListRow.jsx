import React, {useState} from "react";
import {deleteList, editList} from "../../service/shoppingListService";
import {baseClientURL} from "../../constants";

const ShoppingListRow = ({list, refreshLists}) => {

    const [isEdit, setIsEdit] = useState(false)
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

    return (
        <tr>
            <td hidden={isEdit}>
                <a href={`${baseClientURL}lists/${list.id}`}>
                    {list.name}
                </a>
            </td>
            <td hidden={!isEdit}>
                <input type="text" value={newName} onChange={nameChanged} placeholder="Название"/>
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

export default ShoppingListRow
