import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import React, {useState} from "react";

const Alerts = ({component, match}) => {

    const [isShowError, setShowError] = useState(false)
    const [isShowSuccess, setShowSuccess] = useState(false)
    const [errorText, setErrorText] = useState(false)
    const [successText, setSuccessText] = useState(false)

    const showError = (message) => {
        setErrorText(message)
        setShowSuccess(false)
        setShowError(true)
    }

    const showSuccess = (message) => {
        setSuccessText(message)
        setShowError(false)
        setShowSuccess(true)
    }

    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowError(false);
    };
    const handleCloseSuccess = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowSuccess(false);
    };

    return (<div>
            {component({showSuccess, showError, match})}
            <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'left'}}
                      open={isShowError}
                      autoHideDuration={6000}
                      onClose={handleCloseError}>
                <Alert onClose={handleCloseError} severity="error">
                    {errorText}
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'left'}}
                      open={isShowSuccess}
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