export default class FormTemplate {
    constructor() {
        this.formData = {
            position: '',
            description: '',
            type: {},
            startDate: null,
            endDate: null,
            skills: new Map(),
            certification: new Map(),
            qualification: new Map(),
            location: [],
            workAuthorizaion: new Map(),
            financial: [],
            roles: new Map(),
            jobRequirementNotes: '',
            qualificationNotes: '',
            locationNotes: '',
            financialNotes: '',
            status: 'CREATED',
            createdOn:new Date(),
            changedOn:null,
            createdBy:'',
            approvedBy:'',
            rejectedReason:'',
            reWork:''
            

        };
    }
    getNewForm()
    {
        return this.formData;
    }
}
