import React, { useState } from 'react';
import PositionForm from './secondary-forms/PositionForm';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Grid, Button, TextField, ButtonGroup, Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import { SubmitForm } from './data/Data';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-reveal';
import { red } from '@mui/material/colors';
import SaveIcon from '@mui/icons-material/Save';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
const CreateRequisition = (props) => {
    let title = 'Create';
    if (props.isEdit) {
        PositionForm.setForm(props.FormId);
        title = 'Edit';
    }
    const ReworkNotes = () => {
        if (PositionForm.getCompleteForm().status === 'REWORK') {
            return (
                <Grid item xs={50}>
                    <SubCard title="ReWork Notes">
                        <TextField
                            error
                            id="outlined-multiline-static"
                            value={PositionForm.getCompleteForm().reWork.description}
                            label="Description"
                            multiline
                            rows={4}
                            sx={{ width: 600, color: red[500] }}
                            InputProps={{
                                readOnly: true
                            }}
                        />
                    </SubCard>
                </Grid>
            );
        } else {
            return <React.Fragment></React.Fragment>;
        }
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
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
    const navigate = useNavigate();

    const handleRoute = () => {
        navigate('/utils/recruitment/');
    };
    const submitForm = (id) => {
        if (id === 1) {
            if (props.isEdit) {
                SubmitForm.update(props.FormId, PositionForm.getCompleteForm());
            } else {
                SubmitForm.add(PositionForm.getCompleteForm());
            }
            PositionForm.refreshForm();
            handleRoute();
        }
        if (id === 2) {
            PositionForm.getCompleteForm().status = 'PENDING APPROVAL';
            if (props.isEdit) {
                SubmitForm.update(props.FormId, PositionForm.getCompleteForm());
            } else {
                SubmitForm.add(PositionForm.getCompleteForm());
            }
        }

        PositionForm.refreshForm();
        handleRoute();
    };
    const Title = () => {
        return (
            <React.Fragment>
                <Stack spacing={1} direction="row">  
                    <Typography variant="h3" component="h3">
                        {title}
                    </Typography>

                    <ButtonGroup variant="outlined" aria-label="outlined primary button group" style={{marginLeft:"61vw"}}>
                        <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                            onClick={() => {
                                submitForm(1);
                            }}
                        >
                            <CreateOutlinedIcon />
                        </IconButton>

                        <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                            onClick={() => {
                                submitForm(2);
                            }}
                        >
                            <SaveIcon />
                        </IconButton>

                        <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                            onClick={() => {
                                submitForm(3);
                            }}
                        >
                            <DoDisturbIcon />
                        </IconButton>
                    </ButtonGroup>
                </Stack>
            </React.Fragment>
        );
    };
    return (
        <Fade>
            <MainCard title={<Title />}>
                <Grid container spacing={2}>
                    <ReworkNotes />
                    <Grid item xs={12}>
                        <SubCard title="Basic Details">
                            <div>{PositionForm.getForm(0)}</div>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12}>
                        <SubCard title="Configuration">
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Job Requirement" {...a11yProps(0)} />
                                    <Tab label="Qualification" {...a11yProps(1)} />
                                    <Tab label="Location & Work Authorization" {...a11yProps(2)} />
                                    <Tab label="Financial" {...a11yProps(3)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                {PositionForm.getForm(1)}
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                {PositionForm.getForm(2)}
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                {PositionForm.getForm(3)}
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                {PositionForm.getForm(4)}
                            </TabPanel>
                        </SubCard>
                    </Grid>
                </Grid>
            </MainCard>
        </Fade>
    );
};
export default CreateRequisition;
