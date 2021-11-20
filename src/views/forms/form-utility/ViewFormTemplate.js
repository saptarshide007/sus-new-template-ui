
import React from 'react';

import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const ViewFormTemplate = (props) => {

    const formData = props.formData;


    function ConfigTable(props) {
        return (
            <TableContainer component={Paper} sx={{ borderColor: '#000', borderStyle: 'solid', borderWidth: '1px', width: '400px' }}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">{props.propertyName}</TableCell>
                            <TableCell align="left">Weight</TableCell>
                            <TableCell align="left">isMandatory</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.rows.map((row) => (
                            <TableRow key={row.code} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell align="left">{row.value}</TableCell>
                                <TableCell align="left">{row.weight}</TableCell>
                                <TableCell align="left">{row.mandatory.toString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }

    return (
        <React.Fragment>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Stack spacing={3}>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <TextField
                                    required
                                    id="outlined-read-only-input"
                                    label="Position"
                                    defaultValue={formData.position}
                                    size="small"
                                    InputProps={{
                                        readOnly: true
                                    }}
                                    sx={{ width: 300 }}
                                />
                                <TextField
                                    required
                                    id="outlined-read-only-input"
                                    label="Job Type"
                                    defaultValue={formData.type.code}
                                    size="small"
                                    InputProps={{
                                        readOnly: true
                                    }}
                                    sx={{ width: 300 }}
                                />
                            </Stack>
                            <Stack direction="row" alignItems="center" spacing={1} sx={{ width: 300 }}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Start Date"
                                        value={formData.startDate}
                                        fullWidth
                                        disabled
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Stop Date"
                                        value={formData.endDate}
                                        disabled
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Stack>
                            <Stack sx={{ marginTop: 1 }}>
                                <TextField
                                    id="outlined-multiline-static"
                                    value={formData.description}
                                    label="Description"
                                    multiline
                                    rows={4}
                                    InputProps={{
                                        readOnly: true
                                    }}
                                />
                            </Stack>
                            <Stack direction="row" spacing={5}>
                                <ConfigTable propertyName="Skills" rows={[...formData.skills].map((value) => value[1])} />
                                <ConfigTable propertyName="Roles" rows={[...formData.roles].map((value) => value[1])} />
                            </Stack>

                            <Stack direction="row" spacing={5}>
                                <ConfigTable propertyName="Qualification" rows={[...formData.qualification].map((value) => value[1])} />
                                <ConfigTable propertyName="Certification" rows={[...formData.certification].map((value) => value[1])} />
                            </Stack>
                        </Stack>
                    </Stack>
        </React.Fragment>
    );
};

export default ViewFormTemplate;
