import Forms, { getCompleteForm, refreshForm,setForm } from './Forms';
import { SubmitForm } from '../data/Data';
class PositionForm {
    constructor(formList, activeForm) {
        this.activeForm = 0;
    }
    getForm(id) {
        return <Forms form={id} />;
    }
    getCompleteForm() {
        return getCompleteForm();
    }
    refreshForm() {
        refreshForm();
    }
    setForm = (id) => {
        setForm(SubmitForm.getList().get(Number(id)));
    };
}

export default new PositionForm();
