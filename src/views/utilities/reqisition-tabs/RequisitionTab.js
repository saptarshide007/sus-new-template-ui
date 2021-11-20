import { Fragment, React } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { DataGrid } from '@mui/x-data-grid';
import { SubmitForm } from 'views/forms/data/Data';
import { useNavigate } from 'react-router-dom';

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
    { field: 'rejectedOn', headerName: 'Rejected On',type: 'date', width: 160 },
     { field: 'approvedBy', headerName: 'Approved By', width: 160 },
    { field: 'approvedOn', headerName: 'Approved On',type: 'date', width: 160 },
];
const tab1Column=["id","position","createdOn","startDate","stopDate","status"];
const tab2Column=["id","position","createdOn","startDate","stopDate","status"];
const tab3Column=["id","position","createdOn","startDate","stopDate"];
const tab4Column=["id","position","createdOn","startDate","stopDate","approvedBy","approvedOn"];
const tab5Column=["id","position","createdOn","startDate","stopDate","rejectedBy","rejectedOn"];
const tab6Column=["id","position","createdOn","startDate","stopDate","rejectedBy","rejectedOn"];
const RequisitionTab = (props) => {
    const FormList = SubmitForm.getList();
    let filterList = null;
    let columns=null;
        if (props.tab === 1) {
            columns=allColumns.filter((value)=>tab1Column.includes(value.field));
            filterList = FormList;

        } else if (props.tab === 2) {
            columns=allColumns.filter((value)=>tab2Column.includes(value.field));
            filterList = new Map([...FormList].filter((value) => value[1].status != 'CREATED'));
        }
        else if (props.tab === 3) {
            columns=allColumns.filter((value)=>tab3Column.includes(value.field));
            filterList = new Map([...FormList].filter((value) => value[1].status === 'PENDING APPROVAL'));
        }
        else if (props.tab === 4) {
            columns=allColumns.filter((value)=>tab4Column.includes(value.field));
            filterList = new Map([...FormList].filter((value) => value[1].status === 'APPROVED'));
        }
        else if (props.tab === 5) {
            columns=allColumns.filter((value)=>tab5Column.includes(value.field));
            filterList = new Map([...FormList].filter((value) => value[1].status === 'REJECTED'));
        }
        else if (props.tab === 6) {
            columns=allColumns.filter((value)=>tab6Column.includes(value.field));
            filterList = new Map([...FormList].filter((value) => value[1].status === 'REWORK'));
        }
    function DataTable() {
        const navigate = useNavigate();

        const handleRoute = (id, status) => {
            
            if(props.tab === 3)
            {
                navigate(`/utils/recruitment/approval/${id}`);
            }
            if(props.tab === 6)
            {
                navigate(`/utils/recruitment/update/${id}`);
            }
            if(props.tab === 1||props.tab === 2)
            {
                if(status === 'CREATED')
                navigate(`/utils/recruitment/update/${id}`);
            }
        };
        
        const rows = [...filterList].map((value) => ({
            id: value[0],
            position: value[1].position,
            createdOn:value[1].createdOn,
            type: value[1].type.code,
            startDate: value[1].startDate,
            stopDate: value[1].endDate,
            status: value[1].status,
            rejectedBy:value[1].approvedBy,
            rejectedOn:value[1].changedOn,
            approvedBy:value[1].approvedBy,
            approvedOn:value[1].changedOn
        }));
        return (
            <div style={{ height: 400, margin: 'auto' }}>
                <DataGrid
                    onRowDoubleClick={(params, event) => {
                        handleRoute(params.row.id, params.row.status);
                    }}
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>
        );
    }

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
            <DataTable />
        </Fragment>
    );
};

export default RequisitionTab;
