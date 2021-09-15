import React, {useEffect, useState} from "react";
import {getPlans} from "../../service/planService";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import AddPlanDialog from "./PlanAddForm/AddPlanDialog";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
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
        <TableContainer component={Paper}>
            <PlanTable refreshData={fetchPlans}
                       rows={plans}
                       addButton={() => <Tooltip title="Добавить план">
                           <Fab color="primary" aria-label="edit">
                               <AddIcon onClick={openAddDialog}/>
                           </Fab>
                       </Tooltip>}/>
        </TableContainer>
    </div>
}

export default Plans
