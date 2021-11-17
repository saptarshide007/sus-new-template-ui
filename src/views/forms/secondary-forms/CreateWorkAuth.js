import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CreateWorkAuth = (props) => {
    const [form, setFormValue] = useState({ code: '', description: '' });
    const formSubmitHandler = () => {
        props.onAddHandler({ name: form.code, description: form.description });
        props.onHide();
    };
    const updateFormData = (value, id) => {
        if (id === 1) setFormValue({ code: value, description: form.description });
        else setFormValue({ code: form.code, description: value });
    };

    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Create New Work Authorization</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Floating className="mb-2">
                    <Form.Control
                        id="floatingInputCustom"
                        type="email"
                        placeholder="name@example.com"
                        onChange={(e) => updateFormData(e.target.value, 1)}
                    />
                    <label htmlFor="floatingInputCustom">Work Authorization Code</label>
                </Form.Floating>
                <Form.Floating className="mb-2">
                    <Form.Control
                        id="floatingPasswordCustom"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => updateFormData(e.target.value, 2)}
                    />
                    <label htmlFor="floatingPasswordCustom">Description</label>
                </Form.Floating>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={formSubmitHandler}>Create</Button>
            </Modal.Footer>
        </Modal>
    );
};
export default CreateWorkAuth;
