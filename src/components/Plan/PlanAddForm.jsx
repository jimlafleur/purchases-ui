import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SinglePlanAddForm from "./SinglePlanAddForm";
import WeeklyPlanAddForm from "./WeeklyPlanAddForm";
import PeriodicPlanAddForm from "./PeriodicPlanAddForm";

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


const PlanAddForm = () => {
    const [value, setValue] = React.useState(0);

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
                <SinglePlanAddForm/>
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