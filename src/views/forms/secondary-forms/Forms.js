import React, { useState } from 'react';
import BasicForm from '../primary-forms/BasicForm';
import DemographicForm from '../primary-forms/DemographicForm';
import { SkillData, JobTypeData, CertData, QualificationData, RolesData, WorkAuthData } from '../data/Data';
import CredentialForm from '../primary-forms/CredentialForm';

const formData = {
    position: '',
    description: '',
    type: '',
    startDate: null,
    endDate: null,
    skills: [],
    certification: [],
    qualification: [],
    location: [],
    workAuthorizaion: [],
    financial: [],
    roles: [],
    status: ''
};
const Forms = (props) => {
    const [skillList, setSkills] = useState(SkillData.getList());
    const [typeList, setType] = useState(JobTypeData.getList());
    const [certList, setCert] = useState(CertData.getList());
    const [roleList, setRole] = useState(RolesData.getList().map((role) => role.name));
    const [workAuthList, setWorkAuth] = useState(WorkAuthData.getList().map((workAuth) => workAuth.name));
    const [qualificationList, setQualification] = useState(QualificationData.getList());

    const addNewWorkAuth = (workAuth) => {
        WorkAuthData.add(workAuth);
        setWorkAuth(WorkAuthData.getList().map((workAuth) => workAuth.name));
    };
    const addNewRole = (role) => {
        RolesData.add(role);
        setRole(RolesData.getList().map((role) => role.name));
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
            <CredentialForm
                certList={certList}
                qualificationList={qualificationList}
                addNewCert={addNewCert}
                addNewQualification={addNewQualification}
                formData={formData}
                skillList={skillList}
                addNewSkill={addNewSkill}
            />
        );
    if (props.form === 2) return <DemographicForm workAuthList={workAuthList} addNewWorkAuth={addNewWorkAuth} formData={formData} />;
};

export default Forms;
