import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import React, {useState} from "react";
import {useFormControlStyles} from "../CustomTable/constants";

const CustomTextField = ({value, label, setValue, validate}) => {
    const classes = useFormControlStyles();

    const [error, setError] = useState(false)

    const onChange = event => {
        const newValue = event.target.value
        if (validate(newValue)) {
            setValue(newValue)
            setError(false)
        } else {
            setError(true)
        }
    }

    return (
        <FormControl className={classes.formControl}>
            <TextField value={value}
                       onChange={onChange}
                       label={label}
                       helperText={error ? "Поле обязательно" : " "}
                       error={error}/>
        </FormControl>)
}

export default CustomTextField