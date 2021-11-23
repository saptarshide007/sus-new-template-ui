import { Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import SelectorTypeForm from '../form-utility/SelectorTypeForm';
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import { GiSkills } from 'react-icons/gi';
import { MdOutlineSchool, MdAdminPanelSettings, MdAssignment, MdAssignmentInd } from 'react-icons/md';
import { GrCertificate } from 'react-icons/gr';
const QualificationForm = (props) => {
    /*-------local form data--------*/
    const [selectCertList, setCertList] = useState([...props.formData.certification].map((value) => value[1]));
    const [selectQualificationList, setSelectQualificationlList] = useState([...props.formData.qualification].map((value) => value[1]));
    const [description, setDescription] = useState(props.formData.qualificationNotes);
    /*------------------------------*/
    console.log(props.formData);
    const addSelectedCert = (newCert) => {
        if (!selectCertList.map((k) => k.value).includes(newCert)) {
            setCertList((prevList) => {
                return [...prevList,{ label: newCert, value: newCert, mandatory: false, weight: 1 }];
            });
            props.formData.certification.set(newCert, {
                label: newCert,
                value: newCert,
                mandatory: false,
                weight: 1
            });
        }
    };
    const addSelectedQualification = (newQualification) => {
        if (!selectQualificationList.map((k) => k.value).includes(newQualification)) {
            setSelectQualificationlList((prevList) => {
                return [
                    ...prevList,{
                        label: newQualification,
                        value: newQualification,
                        mandatory: false,
                        weight: 1
                    },
                    
                ];
            });
            props.formData.qualification.set(newQualification, {
                label: newQualification,
                value: newQualification,
                mandatory: false,
                weight: 1
            });
        }
    };
    const addDescription = (description) => {
        props.formData.qualificationNotes = description;
        setDescription(description);
    };
    return (
        <React.Fragment>
            <Fade>
                <Stack direction="row" spacing={1}>
                    <SelectorTypeForm
                        title="Qualification"
                        selectorList={props.qualificationList}
                        selectedItemList={selectQualificationList}
                        createNewItemHandler={props.addNewQualification}
                        addSelectedItemHandler={addSelectedQualification}
                        secondaryForm={'Qualification'}
                        icon={<MdOutlineSchool style={{ fontSize: '35px' }} />}
                        cardSize={600}
                        propertyChangeHandler={props.formData.qualification}
                    />
                    <SelectorTypeForm
                        title="Certificaion"
                        selectorList={props.certList}
                        selectedItemList={selectCertList}
                        createNewItemHandler={props.addNewCert}
                        addSelectedItemHandler={addSelectedCert}
                        secondaryForm={'Certification'}
                        icon={<GrCertificate style={{ fontSize: '35px' }} />}
                        cardSize={600}
                        propertyChangeHandler={props.formData.certification}
                    />
                </Stack>
                <Stack sx={{ marginTop: 1 }}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Notes"
                        multiline
                        rows={4}
                        value={description}
                        onChange={(e) => {
                            addDescription(e.target.value);
                        }}
                    />
                </Stack>
            </Fade>
        </React.Fragment>
    );
};
export default QualificationForm;
