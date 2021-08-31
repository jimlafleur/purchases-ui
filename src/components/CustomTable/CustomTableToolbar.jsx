import Toolbar from "@material-ui/core/Toolbar";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import {useToolbarStyles} from "./constants";

const CustomTableToolbar = ({tittle, count}) => {

    const classes = useToolbarStyles()

    return (
        <Toolbar className={clsx(classes.root)}>
            <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                {tittle} {count>0 ?`(${count})` : ``}
            </Typography>
        </Toolbar>
    );
};

CustomTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default CustomTableToolbar