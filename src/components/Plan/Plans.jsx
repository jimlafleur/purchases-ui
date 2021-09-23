import React, {useEffect, useState} from "react";
import {getPlans} from "../../service/planService";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import AddPlanDialog from "./PlanAddForm/AddPlanDialog";
import PlanTable from "./PlanTable";

const Plans = () => {

    const [plans, setPlans] = useState([])
    const [isAdd, setIsAdd] = useState(false)

    const fetchPlans = () => getPlans(setPlans)

    useEffect(fetchPlans, [])

    const openAddDialog = () => {
        setIsAdd(true);
    }

    const closeAddDialog = () => {
        setIsAdd(false);
    }

    return <div className="container-fluid">
        <AddPlanDialog isOpen={isAdd} closeDialog={closeAddDialog} refreshPlans={fetchPlans}/>
        <PlanTable refreshData={fetchPlans}
                   rows={plans}
                   addButton={() => <Tooltip title="Добавить план">
                       <Fab color="primary" aria-label="edit">
                           <AddIcon onClick={openAddDialog}/>
                       </Fab>
                   </Tooltip>}/>
    </div>
}

export default Plans
