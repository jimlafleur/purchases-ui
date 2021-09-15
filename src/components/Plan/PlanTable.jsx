import React from 'react';
import CustomTable from "../CustomTable/CustomTable";
import PlanDeleteDialog from "./PlanDeleteDialog";
import PlanEditDialog from "./PlanEditDialog";
import PlanRow from "./PlanRow";
import {PLAN_TITTLE, PlanHeadCells} from "./planConstants";

const PlanTable = ({rows, refreshData, addButton}) => {

    return <CustomTable headCells={PlanHeadCells}
                        rows={rows}
                        createRow={PlanRow}
                        editDialog={PlanEditDialog}
                        refreshData={refreshData}
                        tittle={PLAN_TITTLE}
                        deleteDialog={PlanDeleteDialog}
                        addButton={addButton}/>
}

export default PlanTable