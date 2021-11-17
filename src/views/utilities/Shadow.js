import PropTypes from 'prop-types';
import { Box, Card } from '@mui/material';

import MainCard from 'ui-component/cards/MainCard';
import RequisitionTab from './reqisition-tabs/RequisitionTab';

import { useState, React } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function UtilitiesShadow() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`
        };
    }
    return (
        <MainCard title="Recruitment">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="My Requisition" {...a11yProps(0)} />
                    <Tab label="Requisition" {...a11yProps(1)} />
                    <Tab label="Talent Search" {...a11yProps(2)} />
                    <Tab label="Interviews" {...a11yProps(3)} />
                    <Tab label="Pannel Reviews" {...a11yProps(4)} />
                    <Tab label="Approval" {...a11yProps(5)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <RequisitionTab />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </MainCard>
    );
}

export default UtilitiesShadow;
