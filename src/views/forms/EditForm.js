import { useParams } from "react-router-dom";
import CreateRequisition from "./CreateRequisition";
const EditForm=()=>{
const {id}=useParams();
return (
    <CreateRequisition isEdit={true} FormId={id}/>
);
}

export default EditForm;