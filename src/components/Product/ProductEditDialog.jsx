import React, {useEffect, useState} from "react";
import {
    PRODUCT_EDIT_DIALOG_TITTLE,
    PRODUCT_EDITED,
    PRODUCT_ERROR,
    PRODUCT_SAVE_TOOLTIP,
    validateProduct
} from "./productConstants";
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
import {useFormControlStyles} from "../CustomTable/constants";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {getCategories} from "../../service/categoryService";

const ProductEditDialog = ({currentRow, refreshData, isOpen, closeDialog, showSuccess, showError}) => {

    const classes = useFormControlStyles();

    const [categories, setCategories] = useState([])
    const [name, setName] = useState(currentRow.name)
    const [categoryId, setCategoryId] = useState(currentRow.categoryId)

    const fetchCategories = () => getCategories(setCategories)

    useEffect(fetchCategories, [])

    useEffect(() => {
        setName(currentRow.name)
        setCategoryId(currentRow.categoryId)
    }, [currentRow])

    const nameChanged = event => {
        setName(event.target.value);
    }

    const categoryChanged = event => {
        setCategoryId(event.target.value);
    }

    const save = () => {
        const product = {name, id: currentRow?.id}
        const params = {categoryId}

        if (validateProduct(product, params)) {
            putProduct(product, refreshData, params)
            closeDialog()
            showSuccess(PRODUCT_EDITED)
        } else {
            showError(PRODUCT_ERROR)
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
                        <Select onChange={categoryChanged} value={categoryId}>
                            {categories?.map(category => <MenuItem value={category.id}>{category.name}</MenuItem>)}
                        </Select>
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
