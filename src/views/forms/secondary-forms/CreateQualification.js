import { useState, React } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import { Stack,TextField } from '@mui/material';
import Button from '@mui/material/Button';

const CreateQualification = (props) => {
    const [form, setFormValue] = useState({ code: '', description: '' });
    const formSubmitHandler = () => {
        props.onAddHandler(form);
        props.onHide();
    };
    const updateFormData = (value, id) => {
        if (id === 1) setFormValue({ code: value, description: form.description });
        else setFormValue({ code: form.code, description: value });
    };

    return (
        <Stack alignItems="center" spacing={1}>

                    <TextField
                        required
                        id="outlined-required"
                        label="Qualification Code"
                        
                        size="small"
                        sx={{ width: 300 }}
                        onChange={(e) => updateFormData(e.target.value, 1)}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Description"
                        row={3}
                        
                        size="small"
                        sx={{ width: 300 }}
                        onChange={(e) => updateFormData(e.target.value, 2)}
                    />

                    <Button color="secondary" variant="outlined" startIcon={<SaveIcon />} size="medium" onClick={formSubmitHandler}>
                        Save
                    </Button>
                </Stack>

    );
};
export default CreateQualification;
