import React, {useEffect, useState} from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SinglePlanAddForm from "./SinglePlanAddForm";
import WeeklyPlanAddForm from "./WeeklyPlanAddForm";
import PeriodicPlanAddForm from "./PeriodicPlanAddForm";
import {getAllLists} from "../../../service/shoppingListService";

function TabPanel(props) {
    const {children, value, index} = props;

    return (
        <div>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


const PlanAddForm = ({closeDialog, refreshPlans}) => {
    const [value, setValue] = useState(0);
    const [lists, setLists] = useState([])

    const fetchLists = () => getAllLists(setLists)

    useEffect(fetchLists, [])
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Единичный план"/>
                <Tab label="Недельный план"/>
                <Tab label="Периодичный план"/>
            </Tabs>
            <TabPanel value={value} index={0}>
                <SinglePlanAddForm lists={lists} closeDialog={closeDialog} refreshPlans={refreshPlans}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <WeeklyPlanAddForm/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <PeriodicPlanAddForm/>
            </TabPanel>
        </div>
    );
}

export default PlanAddForm