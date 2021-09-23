import React, {useEffect, useState} from "react";
import {useAddFormStyles} from "../../CustomTable/constants";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import SaveIcon from "@material-ui/icons/Save";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import {getEditDialogTittle, PURCHASE_SAVE_TOOLTIP} from "./purchaseConstants";
import {putPurchase} from "../../../service/purchaseService";

const PurchaseEditDialog = ({currentRow, refreshData, isOpen, closeDialog}) => {

    const classes = useAddFormStyles();
    const [count, setCount] = useState(currentRow?.count)
    const [coast, setCoast] = useState(currentRow?.coast)

    useEffect(() => {
        setCount(currentRow.count)
        setCoast(currentRow.coast)
    }, [currentRow])

    const countChanged = event => {
        const newCount = event.target.value
        if (!isNaN(newCount) && newCount >= 0) {
            setCount(newCount)
        }
    }

    const coastChanged = event => {
        const newCoast = event.target.value
        if (!isNaN(newCoast) && newCoast >= 0) {
            setCoast(newCoast)
        }
    }

    const resetPurchaseForm = () => {
        setCount(currentRow.count)
        setCoast(currentRow.coast)
    }

    const save = () => {
        const newPurchase = {id: currentRow.id, count, coast}
        putPurchase(newPurchase, refreshData)
        closeDialog()
    }

    const cancel = () => {
        closeDialog()
        resetPurchaseForm()
    }

    return (
        <Dialog open={isOpen} onClose={cancel}>
            <DialogTitle>{getEditDialogTittle(currentRow.name)}</DialogTitle>
            <DialogContent>
                <form className={classes.root}>
                    <TextField value={count} onChange={countChanged} label="Количество (шт.)"/>
                    <TextField value={coast} onChange={coastChanged} label="Стоимость (₽)"/>
                </form>
            </DialogContent>
            <DialogActions>
                <Tooltip title={PURCHASE_SAVE_TOOLTIP}>
                    <Fab color="secondary" aria-label="save">
                        <SaveIcon onClick={save}/>
                    </Fab>
                </Tooltip>
                <Tooltip title="Отмена">
                    <Fab color="secondary" aria-label="save">
                        <CloseIcon onClick={cancel}/>
                    </Fab>
                </Tooltip>
            </DialogActions>
        </Dialog>
    )
}

export default PurchaseEditDialog
