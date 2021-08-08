import React, {useEffect, useState} from "react";
import {getPlans} from "../../service/planService";
import PlanRow from "./PlanRow";
import {getAllLists} from "../../service/shoppingListService";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import AddPlanDialog from "./AddPlanDialog";

const Plans = () => {

    const [plans, setPlans] = useState([])
    const [lists, setLists] = useState([])
    const [isAdd, setIsAdd] = useState(false)

    const fetchPlans = () => getPlans(setPlans)
    const fetchLists = () => getAllLists(setLists)

    useEffect(fetchPlans, [])
    useEffect(fetchLists, [])

    const openEditDialog = () => {
        setIsAdd(true);
    }

    const closeAddDialog = () => {
        setIsAdd(false);
    }

    return (

        <div className="container-fluid">

            <AddPlanDialog isOpen={isAdd} closeDialog={closeAddDialog}/>

            <Tooltip title="Добавить план">
                <Fab color="primary" aria-label="edit">
                    <AddIcon onClick={openEditDialog}/>
                </Fab>
            </Tooltip>

            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Список покупок</th>
                    <th scope="col">Дата</th>
                </tr>
                </thead>
                <tbody>
                {plans.map(plan => <PlanRow plan={plan}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default Plans
