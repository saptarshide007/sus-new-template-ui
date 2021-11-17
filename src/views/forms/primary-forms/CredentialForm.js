import { Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import SelectorTypeForm from '../form-utility/SelectorTypeForm';

const CredentialForm = (props) => {
    /*-------local form data--------*/
    const [selectCertList, setCertList] = useState(props.formData.certification);
    const [selectSkillList, setSelectSkillList] = useState(props.formData.skills);
    const [selectQualificationList, setSelectQualificationlList] = useState(props.formData.qualification);
    /*------------------------------*/
    const addSelectedSkills = (newSkill) => {
        if (!selectSkillList.map((k) => k.value).includes(newSkill)) {
            setSelectSkillList((prevList) => {
                return [{ label: newSkill, value: newSkill, mandatory: false, weight: 0 }, ...prevList];
            });
            props.formData.skills.push({
                label: newSkill,
                value: newSkill,
                mandatory: false,
                weight: 0
            });
        }
    };
    const addSelectedCert = (newCert) => {
        if (!selectCertList.map((k) => k.value).includes(newCert)) {
            setCertList((prevList) => {
                return [{ label: newCert, value: newCert, mandatory: false, weight: 0 }, ...prevList];
            });
            props.formData.certification.push({
                label: newCert,
                value: newCert,
                mandatory: false,
                weight: 0
            });
        }
    };
    const addSelectedQualification = (newQualification) => {
        if (!selectQualificationList.map((k) => k.value).includes(newQualification)) {
            setSelectQualificationlList((prevList) => {
                return [
                    {
                        label: newQualification,
                        value: newQualification,
                        mandatory: false,
                        weight: 0
                    },
                    ...prevList
                ];
            });
            props.formData.qualification.push({
                label: newQualification,
                value: newQualification,
                mandatory: false,
                weight: 0
            });
        }
    };
    return (
        <React.Fragment>
            <Fade>
                <Form>
                    <SelectorTypeForm
                        title="Select Skills"
                        selectorList={props.skillList}
                        selectedItemList={selectSkillList}
                        createNewItemHandler={props.addNewSkill}
                        addSelectedItemHandler={addSelectedSkills}
                        secondaryForm={'Skill'}
                    />
                    <SelectorTypeForm
                        title="Select Certificaion:"
                        selectorList={props.certList}
                        selectedItemList={selectCertList}
                        createNewItemHandler={props.addNewCert}
                        addSelectedItemHandler={addSelectedCert}
                        secondaryForm={'Certification'}
                    />
                    <SelectorTypeForm
                        title="Select Qualification:"
                        selectorList={props.qualificationList}
                        selectedItemList={selectQualificationList}
                        createNewItemHandler={props.addNewQualification}
                        addSelectedItemHandler={addSelectedQualification}
                        secondaryForm={'Qualification'}
                    />
                </Form>
            </Fade>
        </React.Fragment>
    );
};
export default CredentialForm;
