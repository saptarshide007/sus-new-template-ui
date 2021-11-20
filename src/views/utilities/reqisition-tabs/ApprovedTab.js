import { Fragment, React } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { DataGrid } from '@mui/x-data-grid';
import { SubmitForm } from 'views/forms/data/Data';
import { useNavigate } from 'react-router-dom';


 const renderDetailsButton = (params) => {
        return (
            <strong>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 16 }}
                    onClick={() => {
                        parseName(params.row.col6)
                    }}
                >
                    More Info
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 16 }}
                    onClick={() => {
                        parseName(params.row.col6)
                    }}
                >
                    More Info
                </Button>
            </strong>
        )
    }
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'position', headerName: 'Position', width: 140 },
    { field: 'type', headerName: 'Job Type', width: 140 },
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
    { field: 'status', headerName: 'Status', width: 130 },
];




const ApprovalTab = () => { 
    
    const FormList=new Map([...SubmitForm.getList()].filter(value=>value[1].status==="CREATED"));
    function DataTable() {
    const navigate = useNavigate();

    const handleRoute = (id) => {
        navigate(`/utils/recruitment/approval/${id}`);
    };
    const rows =[...FormList].map(value=>

  ( {id:value[0], position:value[1].position,type:value[1].type.code,startDate:value[1].startDate,stopDate:value[1].endDate,status:value[1].status}));
    return (
        <div style={{ height: 400, margin:"auto" }}>
            <DataGrid  onRowDoubleClick={(params, event)=>{handleRoute(params.row.id)}} rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
        </div>
    );
}

    return(
    <Fragment>
        <DataTable />
    </Fragment>
)};

export default ApprovalTab;
