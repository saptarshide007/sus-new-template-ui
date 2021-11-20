import styles from '../../../resources/css/modules/Basic.module.css';
import React, { useState } from 'react';
import { Fade } from 'react-reveal';

import SelectorTypeForm from '../form-utility/SelectorTypeForm';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Autocomplete from '@mui/material/Autocomplete';
import { Modal, Backdrop, Box } from '@mui/material';

import Typography from '@mui/material/Typography';
import CreateType from '../secondary-forms/CreateType';

const BasicForm = (props) => {
    /*-------local form data--------*/
    const [formDataPosition, setPosition] = useState(props.formData.position);
    const [formDataDescription, setDescription] = useState(props.formData.description);
    const [startDate, setStartDateChange] = useState(props.formData.startDate);
    const [endDate, setEndDateChange] = useState(props.formData.endDate);
    /*------------------------------*/
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
    function getObject({ code, description }) {
        return { code, description };
    }
    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired
    };
    const handleTypeChange = (typeValue) => {
        formChangeHandler(3, typeValue);
    };
    const formChangeHandler = (id, value) => {
        switch (id) {
            case 1:
                setPosition(value);
                props.formData.position = value;
                break;
            case 2:
                setDescription(value);
                props.formData.description = value;
                break;

            case 3:
                setTypeValue(value);
                props.formData.type = getObject(value);
                break;

            case 4:
                setStartDateChange(value);
                props.formData.startDate = value;
                break;
            case 5:
                setEndDateChange(value);
                props.formData.endDate = value;
                break;
        }
    };

    const options = props.typeList.map((option) => {
        const firstLetter = option.code[0].toUpperCase();
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option
        };
    });
    const [typeValue, setTypeValue] = useState(options[0]);

    return (
        <React.Fragment>
            <Fade>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Stack spacing={3}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Position"
                                defaultValue={formDataPosition}
                                size="small"
                                sx={{ width: 300 }}
                                onChange={(e) => formChangeHandler(1, e.target.value)}
                    
                            />
                            <Autocomplete
                                id="grouped-demo"
                                value={typeValue}
                                options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                                getOptionLabel={(option) => option.code}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Job Type" />}
                                size="small"
                                onChange={(event, newValue) => {
                                    newValue && handleTypeChange(newValue);
                                }}
                            />
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                    timeout: 500
                                }}
                            >
                                <Fade in={open}>
                                    <Box sx={style}>
                                        <CreateType onHide={handleClose} onAddHandler={props.addNewType} />
                                    </Box>
                                </Fade>
                            </Modal>
                            <Fab color="primary" aria-label="add" size="small" variant="outlined" onClick={handleOpen}>
                                <AddIcon />
                            </Fab>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ width: 300 }}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Start Date"
                                    value={startDate}
                                    fullWidth
                                    onChange={(newValue) => {
                                        formChangeHandler(4, newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Stop Date"
                                    value={endDate}
                                    onChange={(newValue) => {
                                        formChangeHandler(5, newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Stack>
                        <Stack sx={{ marginTop: 1 }}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                value={formDataDescription}
                                onChange={(e) => formChangeHandler(2, e.target.value)}
                            />
                        </Stack>
                    </Stack>
                </Stack>
            </Fade>
        </React.Fragment>
    );
};
export default BasicForm;
