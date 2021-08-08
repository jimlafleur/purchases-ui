import React, {useEffect, useMemo, useState} from "react";
import {getList} from "../../service/shoppingListService";
import PurchaseList from "../Purchase/PurchaseList";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import {baseClientURL} from "../../constants";
import PlanForm from "./PlanForm";

const ShoppingList = ({match}) => {

    const [list, setList] = useState({})

    const fetchList = () => getList(match.params.id, setList)

    useEffect(fetchList, [match.params.id])

    const listName = useMemo(() => list.name, [list])

    const listSize = useMemo(() => list.purchaseList?.length ? `Количество покупок: ${list.purchaseList?.length}` : 'Покупок нет', [list])

    return (
        <div>
            <div>
                {listName}
            </div>
            <div>
                {listSize}
            </div>

            <table className="table">
                <tbody>

                <td className="col-md-3">
                    <div>
                        <div hidden={list.purchaseList?.length === 0}>
                            <PurchaseList purchases={list?.purchaseList} refreshList={fetchList}/>
                        </div>
                        <Fab color="primary" aria-label="add" size="big" href={`${baseClientURL}lists/${list.id}/edit`}>
                            {list.purchaseList?.length === 0 ? <AddIcon/> : <EditIcon/>}
                        </Fab>
                    </div>
                </td>
                <td className="col-md-1">
                    <PlanForm list={list}/>
                </td>
                </tbody>
            </table>

        </div>
    )
}

export default ShoppingList
