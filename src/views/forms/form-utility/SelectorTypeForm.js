import { Button, Form, Row, Col, Stack } from 'react-bootstrap';
import ListSelector from './ListSelector';
import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import Select from 'react-select';
import { IoIosCreate } from 'react-icons/io';
import { ToolTipButton } from '../../utility/Button';
import CreateSkill from '../secondary-forms/CreateSkill';
import CreateCertification from '../secondary-forms/CreateCertification';
import CreateQualification from '../secondary-forms/CreateQualification';
import CreateRole from '../secondary-forms/CreateRole';
import CreateWorkAuth from '../secondary-forms/CreateWorkAuth';

const SelectorTypeForm = (props) => {
    const [selectedSkill, setSelectedSkill] = useState('');
    const [modalShow, setModalShow] = useState(false);
    const handleChange = (selectedOption) => {
        setSelectedSkill(selectedOption.label);
    };
    const addHandler = () => {
        if (selectedSkill !== '') props.addSelectedItemHandler(selectedSkill);
    };
    const ButtonElement = (props) => {
        if (props.disabled) {
            return (
                <Button variant="success" size="md" disabled>
                    {props.msg}
                </Button>
            );
        } else {
            return (
                <Button variant="success" size="md" onClick={props.clickHandler}>
                    {props.msg}
                </Button>
            );
        }
    };
    const SecondaryForm = (props) => {
        switch (props.form) {
            case 'Certification':
                return <CreateCertification show={modalShow} onHide={() => setModalShow(false)} onAddHandler={props.onAddHandler} />;
            case 'Qualification':
                return <CreateQualification show={modalShow} onHide={() => setModalShow(false)} onAddHandler={props.onAddHandler} />;
            case 'Skill':
                return <CreateSkill show={modalShow} onHide={() => setModalShow(false)} onAddHandler={props.onAddHandler} />;
            case 'Role':
                return <CreateRole show={modalShow} onHide={() => setModalShow(false)} onAddHandler={props.onAddHandler} />;
            case 'WorkAuth':
                return <CreateWorkAuth show={modalShow} onHide={() => setModalShow(false)} onAddHandler={props.onAddHandler} />;
        }
    };
    return (
        <React.Fragment>
            <Fade>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={3}>
                            {props.title}
                        </Form.Label>
                        <Col sm={6}>
                            <Stack direction="horizontal" gap={4}>
                                <div style={{ width: '400px' }}>
                                    <Select
                                        onChange={handleChange}
                                        options={props.selectorList.map((value) => ({
                                            label: value,
                                            value: value
                                        }))}
                                    />
                                </div>
                                <ButtonElement msg="Add" disabled={false} clickHandler={addHandler} />
                            </Stack>
                        </Col>
                        <Col sm={1}>
                            <div>
                                <ToolTipButton
                                    variant="primary"
                                    size="mg"
                                    btnname={<IoIosCreate />}
                                    msg="CreateNew"
                                    placement="top"
                                    active={true}
                                    onClick={() => setModalShow(true)}
                                />
                            </div>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Col sm={2}>
                            <ListSelector list={props.selectedItemList} />
                        </Col>
                    </Form.Group>
                </Form>
            </Fade>
            <SecondaryForm onAddHandler={props.createNewItemHandler} form={props.secondaryForm} />
        </React.Fragment>
    );
};
export default SelectorTypeForm;
