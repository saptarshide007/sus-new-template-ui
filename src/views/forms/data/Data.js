class SkillListData {
  constructor(skillList) {
    this.skillList = [
      { code: "Java", description: "This is a sample description" },
      { code: "Oracle", description: "Meachanocal description" },
      { code: "AWS", description: "CivilDescription" },
    ];
  }
  getList() {
    return this.skillList;
  }
  add(skill) {
    this.skillList.push(skill);
  }
}
class JobTypeListData {
  constructor(jobType) {
    this.jobType = [
      { code: "IT", description: "This is a sample description" },
      { code: "Mechanical", description: "Meachanocal description" },
      { code: "Civil", description: "CivilDescription" },
    ];
  }
  getList() {
    return this.jobType;
  }
  add(type) {
    this.jobType.push(type);
  }
}

class CertificationListData {
  constructor(certificationList) {
    this.certificationList = [
      { code: "AWS Developer", description: "" },
      { code: "Associate Developer Oracle", description: "" },
      { code: "Redhat Certified", description: "" },
    ];
  }
  getList() {
    return this.certificationList;
  }
  add(cert) {
    this.certificationList.push(cert);
  }
}

class QualificationListData {
  constructor(qualificationList) {
    this.qualificationList = [
      { code: "10th", description: "" },
      { code: "12th", description: "" },
      { code: "B.tech", description: "" },
    ];
  }
  getList() {
    return this.qualificationList;
  }
  add(credential) {
    this.qualificationList.push(credential);
  }
}
class RolesListData {
  constructor(roleList) {
    this.roleList = [
      { code: "Manager", description: "" },
      { code: "Senior Developer", description: "" },
      { code: "Director", description: "" },
    ];
  }
  getList() {
    return this.roleList;
  }
  add(role) {
    this.roleList.push(role);
  }
  getDescription(name) {}
}
class WorkAuthListData {
  constructor(workAuthList) {
    this.workAuthList = [
      { code: "Australia", description: "" },
      { code: "India", description: "" },
      { code: "Mining", description: "" },
    ];
  }
  getList() {
    return this.workAuthList;
  }
  add(workAuth) {
    this.workAuthList.push(workAuth);
  }
  getDescription(name) {}
}
class FormDataSubmit{
  constructor(formList,nextId)
  {
    this.formList=new Map();
    this.nextId=1
  }
  getList() {
    return this.formList;
  }
    getFormById(id) {
    return this.formList.get(Number(id));
  }
  add(submittedForm) {
    this.formList.set(this.nextId,submittedForm);
    this.nextId=this.nextId+1;
  }
    update(id,submittedForm) {
    this.formList.set(Number(id),submittedForm);
  }
}
export const SubmitForm = new FormDataSubmit();
export const SkillData = new SkillListData();
export const JobTypeData = new JobTypeListData();
export const CertData = new CertificationListData();
export const QualificationData = new QualificationListData();
export const RolesData = new RolesListData();
export const WorkAuthData = new WorkAuthListData();
