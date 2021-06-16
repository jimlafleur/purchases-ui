import React, {useEffect, useMemo, useState} from "react";
import {getList} from "../../service/shoppingListService";
import PurchaseList from "../Purchase/PurchaseList";
import PurchaseAddForm from "../Purchase/PurchaseAddForm";

const ShoppingList = ({match}) => {

    const [list, setList] = useState({})

    const fetchList = () => getList(match.params.id, setList)

    useEffect(fetchList, [match.params.id])

    const listName = useMemo(()=>list.name, [list])

    const listSize = useMemo(()=>list.purchases?.length, [list])

    return (
        <div>
            <div>
                {listName}
            </div>
            <div>
                {listSize}
            </div>

            <PurchaseList purchases={list?.purchaseList}/>
            <PurchaseAddForm listId={list.id} refreshList={fetchList}/>
        </div>
    )
}

export default ShoppingList
