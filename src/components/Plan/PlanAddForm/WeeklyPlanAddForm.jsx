import React, {useState} from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import DialogActions from "@material-ui/core/DialogActions";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import SaveIcon from "@material-ui/icons/Save";
import CloseIcon from "@material-ui/icons/Close";
import {PLAN_SAVE_TOOLTIP} from "../planConstants";

const WeeklyPlanAddForm = () => {

    const [isMonday, setIsMonday] = useState(false)
    const [isTuesday, setIsTuesday] = useState(false)
    const [isWednesday, setIsWednesday] = useState(false)
    const [isThursday, setIsThursday] = useState(false)
    const [isFriday, setIsFriday] = useState(false)
    const [isSaturday, setIsSaturday] = useState(false)
    const [isSunday, setIsSunday] = useState(false)

    const handleMonday = event => {
        setIsMonday(event.target.checked);
    }

    const handleTuesday = event => {
        setIsTuesday(event.target.checked);
    }

    const handleWednesday = event => {
        setIsWednesday(event.target.checked);
    }

    const handleThursday = event => {
        setIsThursday(event.target.checked);
    }

    const handleFriday = event => {
        setIsFriday(event.target.checked);
    }

    const handleSaturday = event => {
        setIsSaturday(event.target.checked);
    }

    const handleSunday = event => {
        setIsSunday(event.target.checked);
    }

    return (
        <div>
            <FormGroup>
                <FormControlLabel control={<Checkbox checked={isMonday} onChange={handleMonday}/>} label="Понедельник"/>
                <FormControlLabel control={<Checkbox checked={isTuesday} onChange={handleTuesday}/>} label="Вторник"/>
                <FormControlLabel control={<Checkbox checked={isWednesday} onChange={handleWednesday}/>} label="Среда"/>
                <FormControlLabel control={<Checkbox checked={isThursday} onChange={handleThursday}/>} label="Четверг"/>
                <FormControlLabel control={<Checkbox checked={isFriday} onChange={handleFriday}/>} label="Пятница"/>
                <FormControlLabel control={<Checkbox checked={isSaturday} onChange={handleSaturday}/>} label="Суббота"/>
                <FormControlLabel control={<Checkbox checked={isSunday} onChange={handleSunday}/>} label="Воскресенье"/>
            </FormGroup>
            <DialogActions>
                <Tooltip title={PLAN_SAVE_TOOLTIP}>
                    <Fab color="secondary" aria-label="save">
                        <SaveIcon onClick={() => {
                        }}/>
                    </Fab>
                </Tooltip>
                <Tooltip title="Отмена">
                    <Fab color="secondary" aria-label="save">
                        <CloseIcon onClick={() => {
                        }}/>
                    </Fab>
                </Tooltip>
            </DialogActions>
        </div>
    )
}

export default WeeklyPlanAddForm