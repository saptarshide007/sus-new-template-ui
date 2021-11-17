class SkillListData {
  constructor(skillList) {
    this.skillList = ["DataScience", "Java", "Angular"];
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
    this.certificationList = ["AWS", "Oracle8", "Java11"];
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
    this.qualificationList = ["10th", "12th", "BE", "BTech", "B.Sc"];
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
      { name: "Role1", description: "" },
      { name: "Role2", description: "" },
      { name: "Role3", description: "" },
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
      { name: "Australia", description: "" },
      { name: "India", description: "" },
      { name: "Mining", description: "" },
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
export const SkillData = new SkillListData();
export const JobTypeData = new JobTypeListData();
export const CertData = new CertificationListData();
export const QualificationData = new QualificationListData();
export const RolesData = new RolesListData();
export const WorkAuthData = new WorkAuthListData();
