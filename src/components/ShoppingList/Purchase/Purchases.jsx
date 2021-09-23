import React, {useEffect, useState} from "react";
import {getList} from "../../../service/shoppingListService";
import PurchaseTable from "./PurchaseTable";
import Fab from "@material-ui/core/Fab";
import {baseClientURL} from "../../../constants";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";

const Purchases = ({match, showSuccess}) => {

    const [list, setList] = useState({})

    const fetchList = () => getList(match.params.id, setList)

    useEffect(fetchList, [match.params.id])

    return (
        <div className="container-fluid">
            <PurchaseTable rows={list?.purchaseList ?? []}
                           refreshData={fetchList}
                           showSuccess={showSuccess}
                           addButton={() => (
                               <Tooltip title="Добавить покупки">
                                   <Fab color="primary" aria-label="add" size="big"
                                        href={`${baseClientURL}lists/${list.id}/edit`}>
                                       {list.purchaseList?.length === 0 ? <AddIcon/> : <EditIcon/>}
                                   </Fab>
                               </Tooltip>
                           )}/>
        </div>
    )
}

export default Purchases
