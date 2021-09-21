import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import React, {useState} from "react";

const Alerts = ({component}) => {

    const [shawError, setShawError] = useState(false)
    const [shawSuccess, setShawSuccess] = useState(false)
    const [errorText, setErrorText] = useState(false)
    const [successText, setSuccessText] = useState(false)

    const showError = (message) => {
        setErrorText(message)
        setShawSuccess(false)
        setShawError(true)
    }

    const showSuccess = (message) => {
        setSuccessText(message)
        setShawError(false)
        setShawSuccess(true)
    }

    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShawError(false);
    };
    const handleCloseSuccess = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShawSuccess(false);
    };

    return (<div>
            {component({showSuccess, showError})}
            <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'left'}}
                      open={shawError}
                      autoHideDuration={6000}
                      onClose={handleCloseError}>
                <Alert onClose={handleCloseError} severity="error">
                    {errorText}
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'left'}}
                      open={shawSuccess}
                      autoHideDuration={6000}
                      onClose={handleCloseSuccess}>
                <Alert onClose={handleCloseSuccess} severity="success">
                    {successText}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Alerts