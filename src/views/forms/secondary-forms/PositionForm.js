import Forms from './Forms';

const totalForms = 3;
class PositionForm {
    constructor(formList, activeForm) {
        this.activeForm = 0;
    }

    getActive() {
        return <Forms form={this.activeForm} />;
    }
    getForm(id) {
        console.log(id);
        return <Forms form={id} />;
    }
    getPrevious() {
        if (this.activeForm === 1) return null;
        else {
            this.activeForm = this.activeForm - 1;
            return <Forms form={this.activeForm} />;
        }
    }
    getNext() {
        if (this.activeForm >= totalForms) return null;
        else {
            this.activeForm = this.activeForm + 1;
            return <Forms form={this.activeForm} />;
        }
    }
    hasPrevious() {
        if (this.activeForm <= 1) return false;
        else return true;
    }
    hasNext() {
        if (this.activeForm >= totalForms) return false;
        else return true;
    }
}

export default new PositionForm();
