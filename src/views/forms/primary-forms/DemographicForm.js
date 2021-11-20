import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import SelectorTypeForm from '../form-utility/SelectorTypeForm';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { MdAdminPanelSettings } from 'react-icons/md';
import { Stack } from '@mui/material';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
const DemographicForm = (props) => {
    const [selectAuthList, setSelectAuthList] = useState([...props.formData.workAuthorizaion].map((value)=>value[1]));
    const [country, selectCountry] = useState('');
    const [region, selectRegion] = useState('');
    const [value, setValue] = React.useState([50, 100]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const RegionSelector = () => {
        return (
            <Stack spacing={2} direction="row">
                <CountryDropdown
                    value={country}
                    onChange={(val) => selectCountry(val)}
                    style={{
                        borderRadius: '12px',
                        border: '1px solid #ccc',
                        width: '220px',
                        height: '40px'
                    }}
                />
                <RegionDropdown
                    country={country}
                    value={region}
                    onChange={(val) => selectRegion(val)}
                    style={{
                        borderRadius: '12px',
                        border: '1px solid #ccc',
                        width: '220px',
                        height: '40px'
                    }}
                />
            </Stack>
        );
    };
    function valuetext(value) {
        return `${value}km`;
    }
    const addSelectedWorkAuth = (newWorkAuth) => {
        if (!selectAuthList.map((k) => k.value).includes(newWorkAuth)) {
            setSelectAuthList((prevList) => {
                return [{ label: newWorkAuth, value: newWorkAuth, mandatory: false, weight: 0 }, ...prevList];
            });
            props.formData.workAuthorizaion.set(newWorkAuth,{
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
                <Stack spacing={10}>
                    <Stack spacing={10} direction="row">
                        <RegionSelector />
                        <Slider
                            getAriaLabel={() => 'Distance range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            step={50}
                            marks
  min={50}
  max={1000}
                        />
                    </Stack>

                    <div style={{ margin: 'auto', marginTop: '10px' }}>
                        <SelectorTypeForm
                            title="Work Authorization:"
                            selectorList={props.workAuthList}
                            selectedItemList={selectAuthList}
                            createNewItemHandler={props.addNewWorkAuth}
                            addSelectedItemHandler={addSelectedWorkAuth}
                            secondaryForm={'WorkAuth'}
                            icon={<MdAdminPanelSettings style={{ fontSize: '35px' }} />}
                            cardSize={900}
                            propertyChangeHandler={props.formData.workAuthorizaion}
                        />
                    </div>
                </Stack>
                                <Stack sx={{ marginTop: 1 }}>
                    <TextField id="outlined-multiline-static" label="Notes" multiline rows={4} />
                </Stack>
            </Fade>
        </React.Fragment>
    );
};
export default DemographicForm;

// <React.Fragment>
//         <Fade>
//                 <div style={{ display: 'block' }}>
//                     <Form.Group as={Row} className="mb-4" controlId="formHorizontalEmail">
//                         <Col sm={5}>
//                             <RegionSelector />
//                         </Col>
//                     </Form.Group>
//                     <Form.Group as={Row} className="mb-4" controlId="formHorizontalEmail">
//                         <Form.Label column sm={3}>
//                             Minimum Proximity:
//                         </Form.Label>
//                         <Col sm={5}>
//                             <Form.Control
//                                 type="text"
//                                 placeholder=""
//                                 onChange={(e) => formChangeHandler(2, e.target.value)}
//                                 value={description}
//                             />
//                         </Col>
//                     </Form.Group>
//                     <Form.Group as={Row} className="mb-4" controlId="formHorizontalEmail">
//                         <Form.Label column sm={3}>
//                             Maximum Proximity:
//                         </Form.Label>
//                         <Col sm={5}>
//                             <Form.Control
//                                 type="text"
//                                 placeholder=""
//                                 onChange={(e) => formChangeHandler(2, e.target.value)}
//                                 value={description}
//                             />
//                         </Col>
//                     </Form.Group>
//                 </div>
//                 <SelectorTypeForm
//                     title="Work Authorization:"
//                     selectorList={props.workAuthList}
//                     selectedItemList={selectAuthList}
//                     createNewItemHandler={props.addNewWorkAuth}
//                     addSelectedItemHandler={addSelectedWorkAuth}
//                     secondaryForm={'WorkAuth'}
//                     icon={<MdAdminPanelSettings style={{ fontSize: '35px' }} />}
//                     cardSize={900}
//                 />
//         </Fade>
//     </React.Fragment>
