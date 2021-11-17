import { Form, Row, Col } from 'react-bootstrap';

import React, { useState } from 'react';

import { Fade } from 'react-reveal';

import CreateType from '../secondary-forms/CreateType';
import SelectorTypeForm from '../form-utility/SelectorTypeForm';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

const DemographicForm = (props) => {
    const [position, setPosition] = useState(props.formData.position);
    const [description, setDescription] = useState(props.formData.description);

    const [modalShow, setModalShow] = useState(false);
    const [selectAuthList, setSelectAuthList] = useState(props.formData.workAuthorizaion);
    const [country, selectCountry] = useState('');
    const [region, selectRegion] = useState('');
    const RegionSelector = () => {
        return (
            <div>
                <CountryDropdown
                    value={country}
                    onChange={(val) => selectCountry(val)}
                    style={{
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        width: '220px'
                    }}
                />
                <RegionDropdown
                    country={country}
                    value={region}
                    onChange={(val) => selectRegion(val)}
                    style={{
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        width: '220px'
                    }}
                />
            </div>
        );
    };

    const addSelectedWorkAuth = (newWorkAuth) => {
        if (!selectAuthList.map((k) => k.value).includes(newWorkAuth)) {
            setSelectAuthList((prevList) => {
                return [{ label: newWorkAuth, value: newWorkAuth, mandatory: false, weight: 0 }, ...prevList];
            });
            props.formData.workAuthorizaion.push({
                label: newWorkAuth,
                value: newWorkAuth,
                mandatory: false,
                weight: 0
            });
        }
    };

    const formChangeHandler = (id, value) => {
        if (id == 1) {
            setPosition(value);
            props.formData.position = value;
        }
    };
    return (
        <React.Fragment>
            <Fade>
                <Form>
                    <div style={{ display: 'block' }}>
                        <Form.Group as={Row} className="mb-4" controlId="formHorizontalEmail">
                            <Form.Label column sm={3}>
                                Location:
                            </Form.Label>
                            <Col sm={5}>
                                <RegionSelector />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-4" controlId="formHorizontalEmail">
                            <Form.Label column sm={3}>
                                Minimum Proximity:
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    onChange={(e) => formChangeHandler(2, e.target.value)}
                                    value={description}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-4" controlId="formHorizontalEmail">
                            <Form.Label column sm={3}>
                                Maximum Proximity:
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    onChange={(e) => formChangeHandler(2, e.target.value)}
                                    value={description}
                                />
                            </Col>
                        </Form.Group>
                    </div>
                    <SelectorTypeForm
                        title="Work Authorization:"
                        selectorList={props.workAuthList}
                        selectedItemList={selectAuthList}
                        createNewItemHandler={props.addNewWorkAuth}
                        addSelectedItemHandler={addSelectedWorkAuth}
                        secondaryForm={'WorkAuth'}
                    />
                </Form>
            </Fade>
            <CreateType show={modalShow} onHide={() => setModalShow(false)} />
        </React.Fragment>
    );
};
export default DemographicForm;
