import React, {useEffect, useState} from "react";
import {KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";
import ru from "date-fns/locale/ru";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import {postPlan} from "../../../service/planService";
import DialogActions from "@material-ui/core/DialogActions";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import {useFormControlStyles} from "../../CustomTable/constants";
import {isNotBlank} from "../../../utils/utils";

const SinglePlanAddForm = ({lists, closeDialog, refreshPlans}) => {

    const classes = useFormControlStyles();

    const [date, setDate] = useState(Date.now)
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState(false)
    const [listId, setListId] = useState(-1)

    useEffect(() => {
        setListId(lists[0]?.id)
    }, [lists])

    const handleDateChange = newDate => {
        setDate(newDate)
    }

    const listChanged = event => {
        setListId(event.target.value);
    }

    const nameChanged = event => {
        setNameError(false)
        setName(event.target.value);
    }

    const addPlan = () => {
        if (isNotBlank(name)) {
            const plan = {name, planDate: date, type: "SINGLE", planType: "SINGLE"}
            const params = {listId}
            postPlan(plan, refreshPlans, params)
            closeDialog()
        } else {
            setNameError(true)
        }
    }

    return (
        <div>
            <FormControl className={classes.formControl}>
                <TextField value={name}
                           onChange={nameChanged}
                           label="Название"
                           helperText={nameError ? "Введите название плана" :" "}
                           error={nameError}/>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="filled-age-native-simple">Список покупок</InputLabel>
                <Select onChange={listChanged} value={listId}>
                    {lists?.map(list => <MenuItem value={list.id}>{list.name}</MenuItem>)}
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ru}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd.MM.yyyy"
                        margin="normal"
                        label="Дата планирования"
                        value={date}
                        onChange={handleDateChange}
                    />
                </MuiPickersUtilsProvider>
            </FormControl>

            <DialogActions>
                <Tooltip title="Добавить план">
                    <Fab color="primary" aria-label="save">
                        <AddIcon onClick={addPlan}/>
                    </Fab>
                </Tooltip>
                <Tooltip title="Отмена">
                    <Fab color="secondary" aria-label="save">
                        <CloseIcon onClick={closeDialog}/>
                    </Fab>
                </Tooltip>
            </DialogActions>
        </div>
    )
}

export default SinglePlanAddForm