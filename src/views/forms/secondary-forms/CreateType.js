import { Modal, Button, Form } from 'react-bootstrap';

const CreateType = (props) => {
    const formSubmitHandler = () => {};
    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Create New Job Type</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Floating className="mb-2">
                    <Form.Control id="floatingInputCustom" type="email" placeholder="name@example.com" />
                    <label htmlFor="floatingInputCustom">Job Type Code</label>
                </Form.Floating>
                <Form.Floating className="mb-2">
                    <Form.Control id="floatingPasswordCustom" type="password" placeholder="Password" />
                    <label htmlFor="floatingPasswordCustom">Description</label>
                </Form.Floating>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Create</Button>
            </Modal.Footer>
        </Modal>
    );
};
export default CreateType;
