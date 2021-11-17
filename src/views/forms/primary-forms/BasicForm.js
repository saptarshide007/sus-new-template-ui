import { Form, Row, Col, Badge, Stack } from 'react-bootstrap';
import styles from '../../../resources/css/modules/Basic.module.css';
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { Fade } from 'react-reveal';
import Select from 'react-select';
import { IoIosCreate } from 'react-icons/io';
import { ToolTipButton } from '../../utility/Button';
import CreateType from '../secondary-forms/CreateType';
import SelectorTypeForm from '../form-utility/SelectorTypeForm';

const BasicForm = (props) => {
    /*-------local form data--------*/
    const [formDataPosition, setPosition] = useState(props.formData.position);
    const [formDataDescription, setDescription] = useState(props.formData.description);
    const [formDataType, setType] = useState(props.formData.type);
    const [startDate, setStartDateChange] = useState(props.formData.startDate);
    const [endDate, setEndDateChange] = useState(props.formData.endDate);
    const [selectRoleList, setSelectRoleList] = useState(props.formData.roles);
    /*------------------------------*/
    const [modalShow, setModalShow] = useState(false);
    const addSelectedRole = (newRole) => {
        if (!selectRoleList.map((k) => k.value).includes(newRole)) {
            setSelectRoleList((prevList) => {
                return [{ label: newRole, value: newRole, mandatory: false, weight: 0 }, ...prevList];
            });
            props.formData.roles.push({
                label: newRole,
                value: newRole,
                mandatory: false,
                weight: 0
            });
        }
    };

    const handleTypeChange = (selectedOption) => {
        formChangeHandler(3, selectedOption.label);
    };
    const formChangeHandler = (id, value) => {
        switch (id) {
            case 1:
                setPosition(value);
                props.formData.position = value;
            case 2:
                setDescription(value);
                props.formData.description = value;
            case 3:
                setType(value);
                props.formData.type = value;
            case 4:
                setStartDateChange(value);
                props.formData.startDate = value;
            case 5:
                setEndDateChange(value);
                props.formData.endDate = value;
        }
    };
    return (
        <React.Fragment>
            <Fade>
                <Form>
                    <div style={{ display: 'block' }}>
                        <Form.Group as={Row} className="mb-4">
                            <Form.Label column sm={3}>
                                Position:
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Control
                                    type="input"
                                    placeholder=""
                                    onChange={(e) => formChangeHandler(1, e.target.value)}
                                    value={formDataPosition}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-4">
                            <Form.Label column sm={3}>
                                Description:
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    onChange={(e) => formChangeHandler(2, e.target.value)}
                                    value={formDataDescription}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-4">
                            <Form.Label column sm={3}>
                                Job Type:
                            </Form.Label>
                            <Col sm={5}>
                                <Stack direction="horizontal" gap={3}>
                                    <div style={{ width: '400px' }}>
                                        <Select
                                            onChange={handleTypeChange}
                                            value={{ label: formDataType, value: formDataType }}
                                            options={props.typeList.map((value) => ({
                                                label: value.code,
                                                value: value.code
                                            }))}
                                        />
                                    </div>
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
                                </Stack>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>
                                Requisition Period:
                            </Form.Label>
                            <Col sm={4}>
                                <div class={`${styles['date-picker']}`}>
                                    <Stack gap={3}>
                                        <div>
                                            <DatePicker onChange={(date) => formChangeHandler(4, date)} value={startDate} />{' '}
                                            <Badge pill bg="success">
                                                StartTime
                                            </Badge>
                                        </div>
                                        <div>
                                            <DatePicker onChange={(date) => formChangeHandler(5, date)} value={endDate} />{' '}
                                            <Badge pill bg="danger">
                                                EndTime
                                            </Badge>
                                        </div>
                                    </Stack>
                                </div>
                            </Col>
                        </Form.Group>
                    </div>
                    <SelectorTypeForm
                        title="Roles & Responsibilities:"
                        selectorList={props.roleList}
                        selectedItemList={selectRoleList}
                        createNewItemHandler={props.addNewRole}
                        addSelectedItemHandler={addSelectedRole}
                        secondaryForm={'Role'}
                    />
                </Form>
            </Fade>
            <CreateType show={modalShow} onHide={() => setModalShow(false)} />
        </React.Fragment>
    );
};
export default BasicForm;
