import React, {useEffect, useState} from "react";
import {getPlans} from "../../service/planService";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import AddPlanDialog from "./AddPlanDialog";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {makeStyles, withStyles} from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const Plans = () => {
    const classes = useStyles();

    const [plans, setPlans] = useState([])
    const [isAdd, setIsAdd] = useState(false)

    const fetchPlans = () => getPlans(setPlans)

    useEffect(fetchPlans, [])

    const openEditDialog = () => {
        setIsAdd(true);
    }

    const closeAddDialog = () => {
        setIsAdd(false);
    }

    return (

        <div className="container-fluid">

            <AddPlanDialog isOpen={isAdd} closeDialog={closeAddDialog} refreshPlans={fetchPlans}/>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Название плана</StyledTableCell>
                            <StyledTableCell align="right">Список покупок</StyledTableCell>
                            <StyledTableCell align="right">Ближайшая дата</StyledTableCell>
                            <StyledTableCell align="right">Тип плана</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {plans.map((plan) => (
                            <StyledTableRow key={plan.name}>
                                <StyledTableCell component="th" scope="row">{plan.name}</StyledTableCell>
                                <StyledTableCell align="right">{plan.shoppingListName}</StyledTableCell>
                                <StyledTableCell align="right">{plan.nearestDate}</StyledTableCell>
                                <StyledTableCell align="right">{plan.planType}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


            {/*<table className="table">*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th scope="col">Список покупок</th>*/}
            {/*        <th scope="col">Дата</th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    {plans.map(plan => <PlanRow plan={plan}/>)}*/}
            {/*    </tbody>*/}
            {/*</table>*/}

            <Tooltip title="Добавить план">
                <Fab color="primary" aria-label="edit">
                    <AddIcon onClick={openEditDialog}/>
                </Fab>
            </Tooltip>
        </div>
    )
}

export default Plans
