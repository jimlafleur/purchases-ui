import React from "react";
import CustomRow from "../CustomTable/CustomRow";
import PlanCells from "./PlanCells";
import {PLAN_DELETE_DIALOG_TOOLTIP, PLAN_EDIT_DIALOG_TOOLTIP} from "./planConstants";

const PlanRow = ({row, setIsEdit, setIsDelete, setCurrentRow}) => {

    return (
        <CustomRow cells={PlanCells}
                   deleteTooltip={PLAN_DELETE_DIALOG_TOOLTIP}
                   editTooltip={PLAN_EDIT_DIALOG_TOOLTIP}
                   row={row}
                   setCurrentRow={setCurrentRow}
                   setIsDelete={setIsDelete}
                   setIsEdit={setIsEdit}/>
    )
}

export default PlanRow
