import { useParams } from 'react-router-dom';

import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import MainCard from 'ui-component/cards/MainCard';

import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import ViewFormTemplate from './form-utility/ViewFormTemplate';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import { Grid, Button, Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

import ButtonGroup from '@mui/material/ButtonGroup';
import { red, green, orange, grey } from '@mui/material/colors';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

import { SubmitForm } from './data/Data';

const ViewForm = (props) => {
    const { id } = useParams();
    const formData = SubmitForm.getFormById(id);
    const navigate = useNavigate();

    const handleRoute = () => {
        navigate('/utils/recruitment/');
    };

    const submitForm = (id, notes) => {
        if (id == 1) {
            formData.changedOn = new Date();
            formData.status = 'APPROVED';
        }
        if (id == 2) {
            formData.changedOn = new Date();

            formData.status = 'REJECTED';
        }
        if (id == 3) {
            formData.reWork = notes;

            formData.status = 'REWORK';
        }
        if (id < 4) {
            formData.changedOn = new Date();
            formData.approvedBy = 'User1';
        }
        handleRoute();
    };
    const Title = () => {
        return (
            <React.Fragment>
                <Grid container spacing={1}>
                    <Grid item xs={10.5}>
                        <Typography variant="h3" component="h3">
                            Form:{formData.position}
                        </Typography>
                    </Grid>
                    <Grid item xs={0}>
                        <div style={{marginLeft:"160%"}}>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">

                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                                onClick={() => {
                                    submitForm(handleRoute);
                                }}
                            >
                                <DoDisturbIcon />
                            </IconButton>
                        </ButtonGroup>
                        </div>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            <Fade>
                <MainCard title={<Title title={'formData.position'} />}>
                    <ViewFormTemplate formData={formData} />
                </MainCard>
            </Fade>
        </React.Fragment>
    );
};

export default ViewForm;
