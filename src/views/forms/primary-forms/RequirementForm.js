import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import SelectorTypeForm from '../form-utility/SelectorTypeForm';
import { GiSkills } from 'react-icons/gi';
import { MdOutlineSchool, MdAdminPanelSettings, MdAssignment, MdAssignmentInd } from 'react-icons/md';
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';

const RequirementForm = (props) => {
    /*-------local form data--------*/
    const [selectSkillList, setSelectSkillList] = useState([...props.formData.skills].map((value) => value[1]));
    const [selectRoleList, setSelectRoleList] = useState([...props.formData.roles].map((value) => value[1]));
    /*------------------------------*/
    const addSelectedSkills = (newSkill) => {
        console.log(props.formData.skills);
        if (!selectSkillList.map((k) => k.value).includes(newSkill)) {
            setSelectSkillList((prevList) => {
                return [...prevList,{ label: newSkill, value: newSkill, mandatory: false, weight: 1 }];
            });
            props.formData.skills.set(newSkill, {
                label: newSkill,
                value: newSkill,
                mandatory: false,
                weight: 1
            });
        }
    };
    const addSelectedRole = (newRole) => {
        if (!selectRoleList.map((k) => k.value).includes(newRole)) {
            setSelectRoleList((prevList) => {
                return [...prevList,{ label: newRole, value: newRole, mandatory: false, weight: 1 }];
            });
            props.formData.roles.set(newRole, {
                label: newRole,
                value: newRole,
                mandatory: false,
                weight: 1
            });
        }
    };
    return (
        <React.Fragment>
            <Fade>
                <Stack direction="row" spacing={1}>
                    <SelectorTypeForm
                        title="Select Skills"
                        selectorList={props.skillList}
                        selectedItemList={selectSkillList}
                        createNewItemHandler={props.addNewSkill}
                        addSelectedItemHandler={addSelectedSkills}
                        secondaryForm={'Skill'}
                        icon={<GiSkills style={{ fontSize: '35px' }} />}
                        cardSize={600}
                        propertyChangeHandler={props.formData.skills}
                    />
                    <SelectorTypeForm
                        title="Select Roles"
                        selectorList={props.roleList}
                        selectedItemList={selectRoleList}
                        createNewItemHandler={props.addNewRole}
                        addSelectedItemHandler={addSelectedRole}
                        secondaryForm={'Role'}
                        icon={<MdAssignment style={{ fontSize: '35px' }} />}
                        cardSize={600}
                        propertyChangeHandler={props.formData.roles}
                    />
                </Stack>
                <Stack sx={{ marginTop: 1 }}>
                    <TextField id="outlined-multiline-static" label="Notes" multiline rows={4} />
                </Stack>
            </Fade>
        </React.Fragment>
    );
};

export default RequirementForm;
