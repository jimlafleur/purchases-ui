import React, {useState} from "react";
import {KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";
import ru from "date-fns/locale/ru";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import {postPlan} from "../../../service/planService";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 250,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const SinglePlanAddForm = ({lists, closeDialog, refreshPlans}) => {
    const classes = useStyles()

    const [date, setDate] = useState(Date.now)
    const [name, setName] = useState('')
    const [listId, setListId] = useState('')

    const handleDateChange = newDate => {
        setDate(newDate)
    }

    const listChanged = event => {
        setListId(event.target.value);
    }

    const nameChanged = event => {
        setName(event.target.value);
    }

    const addPlan = () => {
        const plan = {name, planDate: date, type: "SINGLE", planType: "SINGLE"}
        const params = {listId}
        postPlan(plan, refreshPlans, params)
        closeDialog()
    }

    return (
        <div className={classes.formControl}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField value={name} onChange={nameChanged} label="Название"/>
                </Grid>
                <Grid item xs={12}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Список покупок</InputLabel>
                        <Select onChange={listChanged}>
                            {lists.map(list => <option value={list.id}>{list.name}</option>)}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid>
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
                </Grid>
            </Grid>
        </div>
    )
}

export default SinglePlanAddForm