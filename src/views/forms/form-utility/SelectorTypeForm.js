import ListSelector from './ListSelector';
import React, { useState } from 'react';
import CreateSkill from '../secondary-forms/CreateSkill';
import CreateCertification from '../secondary-forms/CreateCertification';
import CreateQualification from '../secondary-forms/CreateQualification';
import CreateRole from '../secondary-forms/CreateRole';
import CreateWorkAuth from '../secondary-forms/CreateWorkAuth';
import MainCard from 'ui-component/cards/MainCard';
import Button from '@mui/material/Button';

import { Grid, Modal, Backdrop, Fade, Box } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import AddBoxIcon from '@mui/icons-material/AddBox';
const SelectorTypeForm = (props) => {
    let selectedSkill;
    const addHandler = () => {
        if (selectedSkill !== '') props.addSelectedItemHandler(selectedSkill);
    };
    const selectionChangeHandler = (value) => {
        selectedSkill = value.label;
    };

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

    const SecondaryForm = (props) => {
        switch (props.form) {
            case 'Certification':
                return <CreateCertification onHide={handleClose} onAddHandler={props.onAddHandler} />;
            case 'Qualification':
                return <CreateQualification onHide={handleClose} onAddHandler={props.onAddHandler} />;
            case 'Skill':
                return <CreateSkill onHide={handleClose} onAddHandler={props.onAddHandler} />;
            case 'Role':
                return <CreateRole onHide={handleClose} onAddHandler={props.onAddHandler} />;
            case 'WorkAuth':
                return <CreateWorkAuth onHide={handleClose} onAddHandler={props.onAddHandler} />;
        }
    };

    const options = props.selectorList
        .map((value) => ({
            label: value.code,
            value: value.code
        }))
        .map((option) => {
            const firstLetter = option.value[0].toUpperCase();
            return {
                firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
                ...option
            };
        });

    const cardSize = props.cardSize < 450 ? 450 : props.cardSize;
    const autoCompleteSize = cardSize / 3;
    const buttonGridSize = cardSize > 600 ? 1.5 : 2.5;
    const Title = () => {
        return (
            <React.Fragment>
                <Grid container spacing={1}>
                    <Grid item>{props.icon}</Grid>
                    <Grid item xs={5}>
                        <Autocomplete
                            id="grouped-demo"
                            options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                            getOptionLabel={(option) => option.value}
                            sx={{ autoCompleteSize }}
                            renderInput={(params) => <TextField {...params} label={props.title} />}
                            size="small"
                            onChange={(event, newValue) => {
                                newValue && selectionChangeHandler(newValue);
                            }}
                        />
                    </Grid>
                    <Grid item xs={buttonGridSize}>
                        <Button variant="outlined" startIcon={<AddBoxIcon />} size="medium" onClick={addHandler}>
                            Add
                        </Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="contained" startIcon={<CreateIcon />} size="medium" onClick={handleOpen}>
                            Create
                        </Button>

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
                                    <SecondaryForm onAddHandler={props.createNewItemHandler} form={props.secondaryForm} />
                                </Box>
                            </Fade>
                        </Modal>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    };
    return (
        <React.Fragment>
            <MainCard title={<Title />} sx={{ width: cardSize }}>
                <ListSelector list={props.selectedItemList} propertyChangeHandler={props.propertyChangeHandler} />
            </MainCard>
        </React.Fragment>
    );
};

export default SelectorTypeForm;
