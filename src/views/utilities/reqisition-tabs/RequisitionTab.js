import { Fragment, React, useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { DataGrid } from '@mui/x-data-grid';
import { SubmitForm } from 'views/forms/data/Data';
import { useNavigate } from 'react-router-dom';
import CustomizedSteppers from 'views/forms/primary-forms/ProgressBar';
import { Fade } from 'react-reveal';

const allColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'position', headerName: 'Position', width: 140 },
    { field: 'type', headerName: 'Job Type', width: 140 },
    {
        field: 'createdOn',
        headerName: 'Created On',
        type: 'date',
        width: 150
    },
    {
        field: 'startDate',
        headerName: 'Start Date',
        type: 'date',
        width: 150
    },
    {
        field: 'stopDate',
        headerName: 'Stop Date',
        type: 'date',
        width: 150
    },
    { field: 'status', headerName: 'Status', width: 160 },
    { field: 'rejectedBy', headerName: 'Rejected By', width: 160 },
    { field: 'rejectedOn', headerName: 'Rejected On', type: 'date', width: 160 },
    { field: 'approvedBy', headerName: 'Approved By', width: 160 },
    { field: 'approvedOn', headerName: 'Approved On', type: 'date', width: 160 },
    { field: 'rejectReason', headerName: 'Reject Reason', width: 200 },
    { field: 'reworkReason', headerName: 'Rework Reason', width: 200}
];
const tab1Column = ['id', 'position', 'createdOn', 'startDate', 'stopDate', 'status'];
const tab2Column = ['id', 'position', 'createdOn', 'startDate', 'stopDate', 'status'];
const tab3Column = ['id', 'position', 'createdOn', 'startDate', 'stopDate'];
const tab4Column = ['id', 'position', 'createdOn', 'startDate', 'stopDate', 'approvedBy', 'approvedOn'];
const tab5Column = ['id', 'position', 'createdOn', 'startDate', 'stopDate', 'rejectedBy', 'rejectedOn','rejectReason'];
const tab6Column = ['id', 'position', 'createdOn', 'startDate', 'stopDate', 'rejectedBy', 'rejectedOn','reworkReason'];
const RequisitionTab = (props) => {
    const FormList = SubmitForm.getList();
    let filterList = null;
    let columns = null;
    if (props.tab === 1) {
        columns = allColumns.filter((value) => tab1Column.includes(value.field));
        filterList = FormList;
    } else if (props.tab === 2) {
        columns = allColumns.filter((value) => tab2Column.includes(value.field));
        filterList = new Map([...FormList].filter((value) => value[1].status != 'CREATED'));
    } else if (props.tab === 3) {
        columns = allColumns.filter((value) => tab3Column.includes(value.field));
        filterList = new Map([...FormList].filter((value) => value[1].status === 'PENDING APPROVAL'));
    } else if (props.tab === 4) {
        columns = allColumns.filter((value) => tab4Column.includes(value.field));
        filterList = new Map([...FormList].filter((value) => value[1].status === 'APPROVED'));
    } else if (props.tab === 5) {
        columns = allColumns.filter((value) => tab5Column.includes(value.field));
        filterList = new Map([...FormList].filter((value) => value[1].status === 'REJECTED'));
    } else if (props.tab === 6) {
        columns = allColumns.filter((value) => tab6Column.includes(value.field));
        filterList = new Map([...FormList].filter((value) => value[1].status === 'REWORK'));
    }
    function DataTable() {
        const navigate = useNavigate();

        const handleRoute = (id, status) => {
            if (props.tab === 3) {
                navigate(`/utils/recruitment/approval/${id}`);
            }
            else if (props.tab === 6) {
                navigate(`/utils/recruitment/update/${id}`);
            }
            else if (props.tab === 1 && status === 'CREATED') {
                navigate(`/utils/recruitment/update/${id}`);
            }
            else{
                navigate(`/utils/recruitment/view/${id}`);
            }
        };

        const rows = [...filterList].map((value) => ({
            id: value[0],
            position: value[1].position,
            createdOn: value[1].createdOn,
            type: value[1].type.code,
            startDate: value[1].startDate,
            stopDate: value[1].endDate,
            status: value[1].status,
            rejectedBy: value[1].approvedBy,
            rejectedOn: value[1].changedOn,
            approvedBy: value[1].approvedBy,
            approvedOn: value[1].changedOn,
            rejectReason:value[1].rejectedReason.title,
            reworkReason:value[1].reWork.title
        }));
        return (
            <div style={{ height: 400, margin: 'auto' }}>
                <DataGrid
                    onRowDoubleClick={(params, event) => {
                        handleRoute(params.row.id, params.row.status);
                    }}
                    onRowClick={(params, event) => {
                        rowClickHandler(params.row.status);
                    }}
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    density="compact"
                />
            </div>
        );
    }

    const rowClickHandler = (status) => {
        let statusId = -1;
        if (status === 'CREATED') statusId = 0;
        if (status === 'PENDING APPROVAL') statusId = 1;
        updateStatus(statusId);
        if (status === 'APPROVED') statusId = 2;
        updateStatus(statusId);
        if (status === 'REJECTED') statusId = 5;
        updateStatus(statusId);
        if (status === 'REWORK') statusId = 6;
        updateStatus(statusId);
    };
    const [progressStatus, updateStatus] = useState(0);
    return (
        <Fragment>
            <Link to="/utils/recruitment/new">
                <Button
                    style={{ marginBottom: '10px' }}
                    variant="outlined"
                    startIcon={<AddOutlinedIcon />}
                    size="large"
                    href="/utils/recruitment/new"
                >
                    New Requisition
                </Button>
            </Link>
            <Fade>
                {props.tab == 2 ? <CustomizedSteppers progressStatus={progressStatus} /> : <Fragment />}
                <DataTable />
            </Fade>
        </Fragment>
    );
};

export default RequisitionTab;
