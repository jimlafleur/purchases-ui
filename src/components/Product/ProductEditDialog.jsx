import React, {useState} from "react";
import {PRODUCT_EDIT_DIALOG_TITTLE, PRODUCT_SAVE_TOOLTIP, validateProduct} from "./productConstants";
import {putProduct} from "../../service/productService";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import SaveIcon from "@material-ui/icons/Save";
import CloseIcon from "@material-ui/icons/Close";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import {useFormControlStyles} from "../CustomTable/constants";

const ProductEditDialog = ({currentRow, refreshData, isOpen, closeDialog}) => {

    const classes = useFormControlStyles();

    const [categories, setCategories] = useState([])
    const [name, setName] = useState('')
    const [categoryId, setCategoryId] = useState(-1)

    const nameChanged = event => {
        setName(event.target.value);
    }

    const categoryChanged = event => {
        setCategoryId(event.target.value);
    }

    const save = () => {
        const product = {name, id: currentRow?.id}
        const params = {categoryId: categoryId}

        if (validateProduct(product, params)) {
            putProduct(product, refreshData, params)
            closeDialog()
        }
    }

    const cancel = () => {
        closeDialog()
        // resetForm(setters, currentRow)
    }

    return (
        <Dialog open={isOpen} onClose={cancel}>
            <DialogTitle>{PRODUCT_EDIT_DIALOG_TITTLE}</DialogTitle>
            <DialogContent>
                <form className={classes.root}>
                    <FormControl className={classes.formControl}>
                        <TextField value={name} onChange={nameChanged} label="Название"/>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="filled-age-native-simple">Категория товара</InputLabel>
                        <NativeSelect onChange={categoryChanged}>
                            {categories?.map(category => <option value={category.id}>{category.name}</option>)}
                        </NativeSelect>
                    </FormControl>
                </form>
            </DialogContent>
            <DialogActions>
                <Tooltip title={PRODUCT_SAVE_TOOLTIP}>
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

export default ProductEditDialog
