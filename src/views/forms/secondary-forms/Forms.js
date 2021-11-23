import React, { useState } from 'react';
import BasicForm from '../primary-forms/BasicForm';
import DemographicForm from '../primary-forms/DemographicForm';
import { SkillData, JobTypeData, CertData, QualificationData, RolesData, WorkAuthData } from '../data/Data';
import QualificationForm from '../primary-forms/QualificationForm';
import RequirementForm from '../primary-forms/RequirementForm';
import FormTemplate from '../form-utility/FormTemplate';
import FinancialForm from '../primary-forms/FinanacialForm';
let formData = new FormTemplate().getNewForm();
export const getCompleteForm=()=>{
 return formData;
}
export const refreshForm=()=>{
formData = new FormTemplate().getNewForm();
}
export const setForm=(form)=>{
formData = form;
}
const Forms = (props) => {
    const [skillList, setSkills] = useState(SkillData.getList());
    const [typeList, setType] = useState(JobTypeData.getList());
    const [certList, setCert] = useState(CertData.getList());
    const [roleList, setRole] = useState(RolesData.getList());
    const [workAuthList, setWorkAuth] = useState(WorkAuthData.getList());
    const [qualificationList, setQualification] = useState(QualificationData.getList());

    const addNewWorkAuth = (workAuth) => {
        WorkAuthData.add(workAuth);
        setWorkAuth(WorkAuthData.getList());
    };
    const addNewRole = (role) => {
        RolesData.add(role);
        setRole(RolesData.getList());
    };
    const addNewType = (type) => {
        JobTypeData.add(type);
        setType(JobTypeData.getList());
    };
    const addNewSkill = (skill) => {
        SkillData.add(skill);
        setSkills(SkillData.getList());
    };
    const addNewCert = (cert) => {
        CertData.add(cert);
        setCert(CertData.getList());
    };
    const addNewQualification = (qualification) => {
        QualificationData.add(qualification);
        setQualification(QualificationData.getList());
    };
    if (props.form === 0)
        return <BasicForm roleList={roleList} addNewRole={addNewRole} formData={formData} typeList={typeList} addNewType={addNewType} />;
     if (props.form === 1)
        return (
            <RequirementForm

                formData={formData}
                skillList={skillList}
                addNewSkill={addNewSkill}
                roleList={roleList}
                addNewRole={addNewRole}
                
            />
        );
    
        if (props.form === 2)
        return (
            <QualificationForm
                certList={certList}
                qualificationList={qualificationList}
                addNewCert={addNewCert}
                addNewQualification={addNewQualification}
                formData={formData}
            />
        );
    if (props.form === 3) return <DemographicForm workAuthList={workAuthList} addNewWorkAuth={addNewWorkAuth} formData={formData} />;
    if (props.form === 4) return <FinancialForm workAuthList={workAuthList} addNewWorkAuth={addNewWorkAuth} formData={formData} />;
};

export default Forms;
